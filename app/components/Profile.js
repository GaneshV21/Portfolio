"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Ganesh",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Profile() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col md:flex-row justify-between p-5 md:p-10 items-center">
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <p
          className="text-[28px] lg:text-5xl font-semibold font-inter bg-linear-to-r from-purple-400 to-pink-700
               bg-clip-text text-transparent"
        >
          {"Hello, I'm"}{" "}
          <span className="text-white text-[28px] lg:text-5xl font-semibold font-inter">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                variants={container}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="inline-block"
              >
                {words[index].split("").map((char, i) => (
                  <motion.span key={i} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
        </p>
        <p className="text-gray-400 text-lg md:text-xl">
          To enhance my professional skills,capabilities and knowledge in an
          organisation that recognizes the value of hard work and trusts me with
          responsibilities and challenges.
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <button className="px-4 py-2 w-full md:w-auto rounded-full bg-linear-to-r from-purple-600 to-pink-500 text-white text-base md:text-[18px] border-none">
            Hire Me
          </button>
          <button className="px-4 py-2 w-full md:w-auto rounded-full text-white text-base md:text-[18px] border border-solid border-pink-500">
            Download CV
          </button>
        </div>
      </div>
      <div className="p-5 w-full md:w-1/2 flex justify-center items-center">
        <div className="rounded-full w-[250px] h-[250px] bg-gray-900 overflow-hidden">
          <Image
            src="/assets/profile.png"
            alt="Profile"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
