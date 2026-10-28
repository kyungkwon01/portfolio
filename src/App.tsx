import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="mx-auto max-w-4xl px-6 py-10 text-sm text-muted">
        © {new Date().getFullYear()} Kyung Kwon
      </footer>
    </>
  )
}

export default App 