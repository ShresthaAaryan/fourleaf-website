import React from "react";
import Image from "next/image";
import Shakil from "../../../public/team/Shakil.JPG"
import Anju from "../../../public/team/Anju.JPG"
import Samira from "../../../public/team/Samira.JPG"
import Alish from "../../../public/team/Alish.JPG"
import Palistha from "../../../public/team/Palistha.JPG"
import Pranesh from "../../../public/team/Pranesh.JPG"
import Yasasvi from "../../../public/team/Yasasvi.JPG"
export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl w-full">
        <h1 className="text-5xl font-bold text-center text-green-700 mb-6">
          About Us
        </h1>
        <div  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 pl-32 pr-32 pt-8 pb-8">
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
        </div><br/><br/>
        <div>
          <h2 className="text-5xl font-bold text-center text-green-700 mb-6">
            Message From The CEO
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-4 texttestimonial flex flex-col w-full lg:w-[900px] text-center lg:text-left mt-6 lg:mt-0 pl-4">
              <p className="text-black text-xl text-center description">
                  At Four Leaf Clover, we understand your challenges and are committed to your success. With over 4 years of experience in marketing and business development, and a dedicated team of experts, we provide more than just outsourcing—we become your strategic partner. Our digital solutions fit seamlessly into your business, helping you streamline operations, reduce costs, and focus on growth. With our reliable, transparent services, tailored to meet your unique needs, we bring innovation and expertise to empower your business.
                  In today’s fast-paced business landscape, adapting and focusing on growth opportunities is vital. By entrusting us with your outsourcing needs, you gain the freedom to focus on what truly matters—growing your business. We believe in the power of partnership and innovation, bringing expert solutions tailored to meet your unique challenges.
                  Our dedicated professionals are here to deliver results that not only meet but exceed expectations. Together, we’ll build the foundation for your success, empowering your organization to thrive in an ever-changing world.
                  <br />
              </p>
            </div>
            <div className="flex-3 lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] flex items-center justify-center overflow-hidden">
              <Image
                    className="w-[400px] lg:w-[300px] h-auto"
                    alt="CEO"
                    src={Shakil}
                />
            </div>
          </div> 
        </div>
        
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
                  src={member.src}
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