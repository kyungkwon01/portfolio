import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <header className="nav">
        <a href="#hero" className="nav-name">
          Kyung Kwon
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Kyung Kwon
      </footer>
    </>
  )
}

export default App
