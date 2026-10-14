import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="mx-auto max-w-4xl px-6 py-10 text-sm text-zinc-500">
        © {new Date().getFullYear()} Kyung Kwon
      </footer>
    </>
  )
}

export default App
