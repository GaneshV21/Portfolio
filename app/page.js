import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
