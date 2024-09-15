import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Testimonial from "@/components/Testimonial/Testimonial";
import Reviews from "@/components/Reviews/reviews";
import './header.css';
import Body from "@/components/body/Body";

export default function Home() {
  return(
  <div className="big-text">
      <h1 className=" text-green-400 text-8xl font-bold mt-10 ml-40 bigg">Operational 
      </h1>
      <h1 className="text-green-400 text-8xl font-bold bigg ml-40">
        Efficiency
      </h1>
    <div className="big-text">
        <h1 className="font-bold bigg">
          <span className="text-gray-500 text-5xl text-center mt-10 ml-40 bigg"> at</span>
        </h1>
        <h1 className="text-gray-500 text-5xl font-bold  ml-40 bigg">its finest. 
        </h1>
        <br></br><br></br><br></br>
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
