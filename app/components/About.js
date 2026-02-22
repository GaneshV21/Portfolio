"use client";
import { useState } from "react";

function About() {
  let [state, setState] = useState("skills");
  return (
    <div className="flex p-4 lg:p-8 justify-between">
      <div></div>
      <div className="lg:w-1/2 flex gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-white text-2xl font-semibold">About Me</p>
          <p className="text-white text-sm">
            To enhance my professional skills,capabilities and knowledge in an
            organisation that recognizes the value of hard work and trusts me
            with responsibilities and challenges.To enhance my professional
            skills,capabilities and knowledge in an organisation that recognizes
            the value of hard work and trusts me with responsibilities and
            challenges.To enhance my professional skills,capabilities and
            knowledge in an organisation that recognizes the value of hard work
            and trusts me with responsibilities and challenges.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <p
                className={` font-semibold text-gray-300 hover:text-white text-md border-b ${state === "skills" ? "border-b-purple-500" : "border-none"}  cursor-pointer`}
                onClick={() => setState("skills")}
              >
                Skills
              </p>
              <p
                className={`font-semibold text-gray-300 hover:text-white text-md border-b ${state === "education" ? "border-b-purple-500" : "border-none"} cursor-pointer`}
                onClick={() => setState("education")}
              >
                Education
              </p>
            </div>
            {state === "skills" && (
              <div className="text-white text-sm">
                <p className="text-gray-400 font-light italic">
                  Languages:{" "}
                  <span className="text-white">
                    HTML, CSS, Javascript, Python, SQL
                  </span>
                </p>

                <p className="text-gray-400 font-light italic">
                  Frameworks & Technologies :{" "}
                  <span className="text-white">
                    Express.js, Node.js, Flask, React, Next, Antdesign, MongoDB,
                    Tkinter, Selenium
                  </span>
                </p>

                <p className="text-gray-400 font-light italic">
                  Developer Tools :{" "}
                  <span className="text-white">Github, Postman, VS Code</span>
                </p>
                <p className="text-gray-400 font-light italic">
                  Other Skills :{" "}
                  <span className="text-white">OpenStack, SQLAlchemy</span>
                </p>
              </div>
            )}

            {state === "education" && (
              <div className="flex flex-col gap-2 text-white">
                <div>
                  <p className="text-sm ">
                    Bachelor of Technology in Information Technology
                  </p>
                  <p className="text-sm text-gray-400 font-light italic">
                    Saranathan College of Enginnering (Aug 2019 - May 2023)
                  </p>
                </div>

                <div>
                  <p className="text-sm ">
                    Higher Secondary Certificate Examination
                  </p>
                  <p className="text-sm text-gray-400 font-light italic">
                    E.R. Higher Secondary School (Mar 2018 - May 2019)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
