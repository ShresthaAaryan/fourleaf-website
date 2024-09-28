import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-center text-green-700 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center md:text-start">
          Four Leaf Clover Pvt. Ltd. is a business process outsourcing company
          that provides its clients with services such as accounting, email and
          social media marketing, lead generation and conversion, content
          creation, and client servicing. Education organizations, schools, and
          universities may save expenses, offer superior customer service, and
          free up resources to concentrate on more important tasks by
          streamlining their operations.
        </p>
        <p className="text-lg text-gray-700 mb-8 text-center md:text-start">
          As a BPO service provider, Four Leaf Clover aligns its values with
          that of its clients before undertaking the responsibility of
          representing the client&rsquo;s business to their consumers, ensuring a
          consistent and seamless experience.
        </p>
        <div className="my-12">
          <h2 className="text-5xl font-bold text-center text-green-700 mb-6">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
              >
                <Image
                  className="rounded-full mb-4"
                  src={member.image}
                  alt={`Photo of ${member.name}, ${member.position}`}
                  width={96}
                  height={96}
                  style={{ objectFit: "cover" }}
                  priority
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: "Shakil Shrestha",
    position: "CEO",
    image: "/team/Shakil.jpg",
  },
  {
    name: "Anju Shrestha",
    position: "HOD-Operations",
    image: "/team/Anju.jpg",
  },
  {
    name: "Samira Shrestha",
    position: "HOD-Lead Conversion",
    image: "/team/Samira.jpg",
  },
  {
    name: "Alish Shrestha",
    position: "HOD-Sales",
    image: "/team/Alish.jpg",
  },
  {
    name: "Palistha Shrestha",
    position: "HOD-R&D",
    image: "/team/Palistha.jpg",
  },
  {
    name: "Pranesh Maharjan",
    position: "Human Resources Manager",
    image: "/team/Pranesh.jpg",
  },
  {
    name: "Yasasvi Bhochhibhoya",
    position: "Content Creation Specialist",
    image: "/team/Yasasvi.jpg",
  },
];
