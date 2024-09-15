import React from 'react'
import './Body.css'
import { Span } from 'next/dist/trace'

const Body = () => {
  return (
    <div className="m-20 mt-44 body-container ">
        <h1 className=" text-green-400 text-7xl font-bold text-center heading-primary p-4">
            Outsource Your 
        </h1>
        <h1 className="text-gray-400 text-7xl font-bold text-center heading-primary p-4">
            Routine Operations
        </h1>
        <br/>
        <p className="text-black text-2xl text-center mt-16 description">
            Four Leaf Clover is a Business Process Outsourcing (BPO) service provider in the educational sector of Australia. We help to streamline the processes of educational agencies, colleges and universities to help them cut down costs, provide excellent customer support and free up resources to help them focus on business growth.
        </p>
        <br></br><br></br><br></br>
    </div>
  )
}

export default Body