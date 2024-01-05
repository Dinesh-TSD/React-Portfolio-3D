import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Exprience from './components/Exprience/Exprience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Exprience />
    <Contact />
    <Footer />
    </>
  );
}
 
export default App;
