import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Contact() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 p-5 md:p-10"
      id="contact"
    >
      <div className="flex gap-5 text-black dark:text-white">
        <Link href="#">
          <FaFacebookSquare size={30} />
        </Link>
        <Link href="#">
          <FaInstagram size={30} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ganesh-v-27206122a/"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </Link>
      </div>
      <p className="text-black dark:text-white">
        Copyright ©2026 All rights reserved
      </p>
    </div>
  );
}

export default Contact;
