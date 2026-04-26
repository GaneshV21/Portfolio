import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiOpenstack } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
import { SiPrometheus } from "react-icons/si";

let data = [
  {
    title: "HTML",
    icon: <FaHtml5 size={48} color="orange" />,
  },
  {
    title: "CSS",
    icon: <FaCss3Alt size={48} color="blue" />,
  },
  {
    title: "JavaScript",
    icon: <IoLogoJavascript size={48} color="yellow" />,
  },
  {
    title: "React",
    icon: <FaReact size={48} color="cyan" />,
  },
  {
    title: "Next.js",
    icon: <RiNextjsFill size={48} color="black" />,
  },
  {
    title: "Node.js",
    icon: <IoLogoNodejs size={48} color="green" />,
  },
  {
    title: "Express",
    icon: <SiExpress size={48} color="black" />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={48} color="green" />,
  },
  {
    title: "Tailwind CSS",
    icon: <RiTailwindCssFill size={48} color="cyan" />,
  },
  {
    title: "Ant Design",
    icon: <SiAntdesign size={48} />,
  },
  {
    title: "Git",
    icon: <FaGitAlt size={48} color="orange" />,
  },
  {
    title: "OpenStack",
    icon: <SiOpenstack size={48} color="red" />,
  },
  {
    title: "Grafana",
    icon: <SiGrafana size={48} color="orange" />,
  },
  {
    title: "Prometheus",
    icon: <SiPrometheus size={48} color="orange" />,
  },
  {
    title: "Postman",
    icon: <SiPostman size={48} color="orange" />,
  },
  {
    title: "VS Code",
    icon: <VscVscode size={48} color="blue" />,
  },
];
function Skills() {
  return (
    <div className="container mx-auto p-5 md:p-10 ">
      <h2 className="text-2xl font-bold mb-4 text-black">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {data.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {skill.icon}
            <span className="mt-2 text-sm font-medium text-black">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
