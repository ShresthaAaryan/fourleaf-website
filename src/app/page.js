import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Testimonial from "@/components/Testimonial/Testimonial";
import Reviews from "@/components/Reviews/reviews";
import './header.css';
import Body from "@/components/body/Body";

export default function Home() {
  return(
  <div className="big-text pd-4 bg-gray-50">
    <div className="head-container">
      <h1 className=" text-green-400 text-10xl font-bold mt-10 ml-40 bigg">
        Operational 
      </h1>
      <h1 className="text-green-400 text-10xl font-bold bigg ml-40">
        Efficiency
      </h1>
      <div className="big-text">
        <h1 className="font-bold bigg">
          <h1 className="text-gray-500 text-6xl text-center mt-10 ml-40 bigg"> at</h1>
        </h1>
        <h1 className="text-gray-500 text-6xl font-bold  ml-40 bigg">
          its finest. 
        </h1>
      </div>
    </div>
    <Body/>
    <Testimonial/>
    <br></br>
    <Reviews/>
    <br></br>
    <Footer/>
   </div>
  ) 
   ;

}
