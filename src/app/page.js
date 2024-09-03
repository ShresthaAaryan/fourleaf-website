import Image from "next/image";
import Footer from "@/components/footer/Footer";
import './header.css';
export default function Home() {
  return(
 <div className="big-text ">
  <h1 className=" text-green-400 text-8xl font-bold mt-10 ml-40  " >Operational 
   </h1>
   <span className="text-green-400 text-8xl font-bold mt-10 ml-40 ">Efficiency</span> 
   <div className="big-text ">
      <h1 className=" font-bold ml-40">
        
        <span className="text-gray-500 text-5xl "> at</span>
      </h1>
      <h1 className="text-gray-500 text-5xl font-bold ml-40">its finest. 
      </h1>
    </div>
    <Footer/>
   </div>
  ) 
   ;

}
