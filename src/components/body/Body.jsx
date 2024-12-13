import React from 'react'
import './Body.css'
import GroupCard from '../groupCard/groupCard'
import "../../app/bodys.css"
import Details from '../details/details'
import Image from "next/image";
import Shakil from "../../../public/team/Shakil.JPG";

const Body = () => {
  return (
    <div className="m-20 md:mt-72 body-container">
        <br/><br/><br/>
        <p className="text-black text-2xl text-center mt-16 description">
            Four Leaf Clover is a Business Process Outsourcing (BPO) service provider in the educational sector of Australia. We help to streamline the processes of educational agencies, colleges and universities to help them cut down costs, provide excellent customer support and free up resources to help them focus on business growth.
        </p>
      <br/><br/>
      <GroupCard/><br/><br/><br/><br/>
      <div className="mt-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-8">
            Message From The CEO
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 px-6 py-8">
            <div className="flex-1 text-center lg:text-center lg:ml-24">
              <p className="text-base md:text-lg text-gray-700">
                At Four Leaf Clover, we understand your challenges and are committed to your success. With over 4 years of experience in marketing and business development, and a dedicated team of experts, we provide more than just outsourcing—we become your strategic partner. Our digital solutions fit seamlessly into your business, helping you streamline operations, reduce costs, and focus on growth.
              </p>
              <p className="mt-4 text-base md:text-lg text-gray-700">
                By entrusting us with your outsourcing needs, you gain the freedom to focus on what truly matters—growing your business. Together, we’ll build the foundation for your success, empowering your organization to thrive in an ever-changing world.
              </p>
            </div>
            <div className="flex-1 mt-6 lg:mt-0 flex justify-center">
              <Image
                alt="CEO"
                src={Shakil}
                width={250}
                height={250}
                objectFit="cover"
              />
            </div>
          </div>
        </div><br/><br/><br/><br/>
      <Details/>
      <br></br><br></br><br></br>
      
    </div>
  )
}

export default Body