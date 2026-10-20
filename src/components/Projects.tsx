import { useRef, useState } from 'react'
import type { MouseEvent, PointerEvent } from 'react'
import { projects } from '../data/projects'

// Pixels the mouse must move before a press counts as a drag rather than a click.
const DRAG_THRESHOLD = 5
// Pixels a drag must cover to advance to the next card on release.
const FLICK_DISTANCE = 50

function Projects() {
  const listRef = useRef<HTMLUListElement>(null)
  const drag = useRef<{ startX: number; startScroll: number; moved: boolean } | null>(null)
  const suppressClick = useRef(false)
  const [dragging, setDragging] = useState(false)

  const scroll = (direction: 1 | -1) => {
    const list = listRef.current
    if (!list) return
    list.scrollBy({ left: direction * list.clientWidth * 0.8, behavior: 'smooth' })
  }

  // Touch devices already swipe natively, so drag-to-scroll is mouse only.
  const onPointerDown = (e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    suppressClick.current = false
    drag.current = { startX: e.clientX, startScroll: e.currentTarget.scrollLeft, moved: false }
  }

  const onPointerMove = (e: PointerEvent<HTMLUListElement>) => {
    const state = drag.current
    if (!state) return
    const dx = e.clientX - state.startX
    if (!state.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return
      state.moved = true
      setDragging(true)
      e.currentTarget.setPointerCapture(e.pointerId)
      window.getSelection()?.removeAllRanges()
    }
    e.currentTarget.scrollLeft = state.startScroll - dx
  }

  const endDrag = (e: PointerEvent<HTMLUListElement>) => {
    const state = drag.current
    drag.current = null
    if (!state?.moved) return
    suppressClick.current = true
    setDragging(false)

    // Glide to a card instead of letting snap jump there instantly. Stops are
    // clamped to the max scroll, since the last cards can't reach the left edge.
    const list = e.currentTarget
    const maxScroll = list.scrollWidth - list.clientWidth
    const stops = [
      ...new Set(
        (Array.from(list.children) as HTMLElement[]).map((card) =>
          Math.min(card.offsetLeft, maxScroll),
        ),
      ),
    ]
    const nearestTo = (x: number) =>
      stops.reduce((best, stop) => (Math.abs(stop - x) < Math.abs(best - x) ? stop : best))

    let target = nearestTo(list.scrollLeft)
    const delta = list.scrollLeft - state.startScroll
    const startStop = nearestTo(state.startScroll)
    // A deliberate drag should advance at least one card rather than spring back.
    if (target === startStop && Math.abs(delta) > FLICK_DISTANCE) {
      const next =
        delta > 0 ? stops.find((s) => s > startStop) : stops.findLast((s) => s < startStop)
      if (next !== undefined) target = next
    }
    list.scrollTo({ left: target, behavior: 'smooth' })
  }

  // A drag that ends over a link shouldn't also open it.
  const onClickCapture = (e: MouseEvent<HTMLUListElement>) => {
    if (!suppressClick.current) return
    suppressClick.current = false
    e.preventDefault()
    e.stopPropagation()
  }

  const arrowClass =
    'grid size-9 place-items-center rounded-full border border-line-strong text-ink transition hover:border-ink'

  return (
    <section
      id="projects"
      className="border-t border-line py-20"
    >
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
          Projects
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous projects"
            onClick={() => scroll(-1)}
            className={arrowClass}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next projects"
            onClick={() => scroll(1)}
            className={arrowClass}
          >
            →
          </button>
        </div>
      </div>
      <ul
        ref={listRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
        className={`no-scrollbar relative -my-2 flex gap-5 overflow-x-auto py-2 ${
          dragging ? 'cursor-grabbing select-none' : 'snap-x snap-mandatory cursor-grab'
        }`}
      >
        {projects.map((project) => (
          <li
            key={project.title}
            className="flex w-72 shrink-0 snap-start flex-col rounded-2xl border border-line p-6 transition hover:border-line-strong hover:shadow-sm sm:w-80"
          >
            <h3 className="text-lg font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mt-2 leading-relaxed">{project.description}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-chip px-2.5 py-0.5 text-xs font-medium text-chip-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {(project.link || project.repo) && (
              <div className="mt-5 flex gap-5 text-sm font-medium text-accent">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    Live ↗
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
