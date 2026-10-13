import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul className="project-grid">
        {projects.map((project) => (
          <li key={project.title} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {(project.link || project.repo) && (
              <div className="card-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Code
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
