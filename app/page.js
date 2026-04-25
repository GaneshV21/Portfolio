import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Profile />
      <div className="bg-[#EDF7FA]">
        <Education />
      </div>
      <Experience />
      <div className="bg-[#EDF7FA]">
        <Skills />
      </div>
      <Projects />
      <Contact/>
    </div>
  );
}
