import React from "react";
import Blog from "../../public/assets/blog_website.png";
import userManagement from "../../public/assets/user_management.png";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

let data = [
  {
    title: "Blog Website",
    link: "https://blog-website-next-js-seven.vercel.app",
    github: "https://github.com/GaneshV21/Blog-Website-nextJs",
    image: Blog,
    description:
      "A full-stack blog application built using Next.js and MongoDB, enabling users to create, read, update, and delete blog posts. Designed with a clean UI and optimized performance, it demonstrates complete CRUD functionality with efficient data handling.",
    technicalStack: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "User Management System",
    link: "https://user-management-joi8.vercel.app",
    github: "https://github.com/GaneshV21/User-Management",
    image: userManagement,
    description:
      "A user management system with authentication and authorization features, including signup and login functionality. Built using React, Node.js, Express, and MongoDB, it supports creating, updating, and deleting users, with Redux for state management and secure logout handling.",
    technicalStack: ["React", "Node.js", "Express", "MongoDB"],
  },
];

function Projects() {
  return (
    <div className="container mx-auto p-5 md:p-10" id="projects">
      <h2 className="text-2xl font-bold mb-4 text-black">Projects</h2>
      <div className="flex flex-col gap-10">
        {data.map((project, index) => (
          <div
            className="flex flex-col md:flex-row gap-10 items-center"
            key={index}
          >
            <Link href={project?.link} target="_blank">
              <div className="w-100 cursor-pointer">
                <Image src={project.image} alt={project.title} />
              </div>
            </Link>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold mb-2 text-black">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  {project.technicalStack.map((tech, techIndex) => (
                    <p
                      key={techIndex}
                      className="text-gray-800 border border-gray-200 bg-gray-300 font-semibold p-2 rounded-xl"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
                <Link href={project.github} target="_blank">
                  <FaGithub size={20} color={"#101411"} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
