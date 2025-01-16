import NavBar from './components/NavBar';
import './App.css';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <AboutMe />
      <WorkExperience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
