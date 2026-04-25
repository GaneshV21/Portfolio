import React from "react";

let data = [
  {
    title: "Secondary School Education Certificate",
    description: "Government Higher Secondary School, Lalgudi (2016 - 2017)",
    percentage: "93.6%",
  },
  {
    title: "Higher Secondary Certificate",
    description: "E.R.Higher Secondary School, Trichy (2018 - 2019)",
    percentage: "72.5%",
  },
  {
    title: "Bachelor of Technology in Information Technology",
    description: "Saranathan College of Engineering (2019 - 2023)",
    percentage: "8.71 CGPA",
  },
];
function Education() {
  return (
    <div className="container mx-auto p-5 md:p-10">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow flex flex-col gap-2"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-lg font-bold text-blue-500">{item.percentage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
