import styles from "./style.module.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Skill from "./components/Skill";
import OtherSkill from "./components/OtherSkill";
import Education from "./components/Education";
import Instrument from "./components/Instrument";
import Languages from "./components/Languages";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
function App() {
  document.title = "Kwan Lok NG Official";
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Home />
        <Intro />
        <Skill />
        <OtherSkill />
        <Experience />
        <Education />
        <Languages />
        <Instrument />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
