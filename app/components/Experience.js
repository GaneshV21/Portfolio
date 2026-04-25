"use client";
import { Card } from "antd";

function Experience() {
  return (
    <div className="container mx-auto p-5 md:p-10" id="experience">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>

      <div className="w-full">
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md z-10"></div>
            <div className="flex-1 w-0.5 bg-gray-300"></div>
          </div>

          <Card className="w-full rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-gray-500">April 2025 - Present</p>
            </div>

            <p className="text-gray-600 mt-1">Zybisys Consulting Services</p>

            <p className="mt-3 text-gray-700">
              Working as a Full Stack Developer on an IaaS cloud platform,
              building dashboards for services such as compute, network,
              storage, and load balancer. Developing modern, user-friendly
              interfaces using React, Next.js, Ant Design, Tailwind CSS, and
              Chart.js for data visualization, including contributing to company
              website development. Implementing complex business logic for cloud
              billing modules while ensuring scalability and maintainability.
              Designing and optimizing backend APIs using Node.js to support
              high-performance cloud operations. Collaborating across teams and
              actively managing Git workflows, including pull requests, code
              reviews, and quality improvements. Contributing to system
              architecture decisions to enhance performance, reliability, and
              scalability.
            </p>
          </Card>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-white rounded-full border-2 border-blue-500 shadow-md z-10"></div>
            <div className="flex-1 w-0.5 bg-gray-300"></div>
          </div>

          <Card className="w-full rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">
                Associate Software Engineer
              </h3>
              <p className="text-gray-500">May 2023 - April 2025</p>
            </div>

            <p className="text-gray-600 mt-1">Zybisys Consulting Services</p>

            <p className="mt-3 text-gray-700">
              Worked on backend development using Node.js, Express, and MongoDB,
              building and maintaining RESTful APIs that improved application
              response time by 40%. Optimized database queries and schema design
              to enhance performance and reduce data retrieval time. Implemented
              secure authentication mechanisms using JWT, hashing, and Fernet
              tokens. Developed internal tools and automation scripts that
              increased developer productivity by 30%. Collaborated with DevOps
              teams to support CI/CD pipelines and resolve deployment issues.
              Gained hands-on experience in frontend development using React,
              Ant Design, and Tailwind CSS while contributing to dashboard
              development. Actively participated in Agile practices including
              sprint planning, code reviews, and team discussions.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Experience;
