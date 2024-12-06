import React from "react";
import Image from "next/image";
import Shakil from "../../../public/team/Shakil.JPG";
import Anju from "../../../public/team/Anju.JPG";
import Samira from "../../../public/team/Samira.JPG";
import Alish from "../../../public/team/Alish.JPG";
import Palistha from "../../../public/team/Palistha.JPG";
import Pranesh from "../../../public/team/Pranesh.JPG";
import Yasasvi from "../../../public/team/Yasasvi.JPG";
import Footer from "@/components/footer/Footer";

export default function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-700 mb-8">
            About Us
          </h1>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 px-6 md:px-8 lg:px-12 py-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 text-center md:text-left sm:mx-10 md:mx-20 lg:mx-60">
              Four Leaf Clover Pvt. Ltd. is a business process outsourcing
              company that provides its clients with services such as
              accounting, email and social media marketing, lead generation and
              conversion, content creation, and client servicing. Education
              organizations, schools, and universities may save expenses, offer
              superior customer service, and free up resources to concentrate
              on more important tasks by streamlining their operations.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 text-center md:text-left sm:mx-10 md:mx-20 lg:mx-60">
              As a BPO service provider, Four Leaf Clover aligns its values
              with that of its clients before undertaking the responsibility of
              representing the client&rsquo;s business to their consumers,
              ensuring a consistent and seamless experience.
            </p>
          </div>
          <div className="my-12 sm:my-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-700 mb-8">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
                >
                  <Image
                    className="rounded-full mb-4"
                    src={member.src}
                    alt={`Photo of ${member.name}`}
                    width={100}
                    height={100}
                    objectFit="cover"
                    priority
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const team = [
  {
    name: "Shakil Shrestha",
    position: "CEO",
    src: Shakil,
  },
  {
    name: "Anju Shrestha",
    position: "HOD-Operations",
    src: Anju,
  },
  {
    name: "Samira Shrestha",
    position: "HOD-Lead Conversion",
    src: Samira,
  },
  {
    name: "Alish Shrestha",
    position: "HOD-Sales",
    src: Alish,
  },
  {
    name: "Palistha Shrestha",
    position: "HOD-R&D",
    src: Palistha,
  },
  {
    name: "Pranesh Maharjan",
    position: "Human Resources Manager",
    src: Pranesh,
  },
  {
    name: "Yasasvi Bhochhibhoya",
    position: "Content Creation Specialist",
    src: Yasasvi,
  },
];
