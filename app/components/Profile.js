"use client";
import { Button, Typography } from "antd";
import Image from "next/image";

function Profile() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center gap-6 p-5 md:p-10">
      <div className="w-full md:w-[55%] flex flex-col gap-4 md:gap-8">
        <div>
          <Typography className="text-3xl! md:text-5xl! font-bold leading-10 md:leading-17 ">
            Hi, I am Ganesh,
          </Typography>
          <Typography className="text-3xl! md:text-5xl! font-bold">
            Software Engineer
          </Typography>
        </div>

        <Typography className="text-gray-400 text-lg! md:text-xl!">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>

        <Button className="bg-[#FF6464]! text-white! text-lg! md:text-xl! w-full md:w-[35%] p-5!">
          Download Resume
        </Button>
      </div>
      <div className="w-full md:w-[45%] flex justify-center">
        <div className="w-70 h-70 rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src="/assets/profile_picture.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
