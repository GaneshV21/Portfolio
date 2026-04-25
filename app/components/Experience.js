"use client";
import { Timeline, Card } from "antd";

function Experience() {
  return (
    <div className="container mx-auto p-5 md:p-10" id="experience">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>

      <div className="w-full">
        <Timeline mode="left" className="w-full">
          <Timeline.Item className="w-full">
            <Card className="w-full rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex justify-between flex-wrap gap-2">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-gray-500">April 2025 - Present</p>
              </div>

              <p className="text-gray-600 mt-1">Zybisys Consulting Services</p>

              <p className="mt-3 text-gray-700">
                Worked on cloud infrastructure dashboards using React and
                Node.js. Integrated OpenStack APIs for networking and storage
                management.
              </p>
            </Card>
          </Timeline.Item>

          <Timeline.Item className="w-full">
            <Card className="w-full rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex justify-between flex-wrap gap-2">
                <h3 className="text-xl font-semibold">
                  Associate Software Engineer
                </h3>
                <p className="text-gray-500">May 2023 - April 2025</p>
              </div>

              <p className="text-gray-600 mt-1">Zybisys Consulting Services</p>

              <p className="mt-3 text-gray-700">
                Developed scalable backend services and REST APIs. Improved
                performance and optimized database queries.
              </p>
            </Card>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
