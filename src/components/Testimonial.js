import Image from "next/image"
import Kaliketi from "/public/Images/kalikt.png"
export default function Testimonial(){
    return(
        <div className="flex flex-col">
            <div className="flex flex-row">
            <div className="flex-3 w-[400px] h-[400px] bg-green-700 border-solid border-[1.5px] mt-[100px] border-green-700 rounded-full pl-[70px] pt-[27px] mt[100]">
                <Image className="h-[300px] w-[300px]" alt="kt" src={Kaliketi} />
            </div>
                <div className="flex-4 flex flex-col w-[900px] pl-[100px]">
                <h1 className="text-[200px] text-green-500 ml-[200px]">"</h1>
                <p> Chat gpt testimonial sample, Being associated with Four Leaf Clover has been a delight. Their commitment to quality, exceptional customer service, and ethical practices make them a standout company. Their services allow me to Free up my time for strategic thinking.<br></br>
                <span className="ml-[300px]">Person one, company name</span>
</p>
                </div>
            </div>

            <div className="flex flex-row justify-between ml-[50px]">
            <div className="flex flex-col w-[900px]">
                <h1 className="text-[200px] text-green-500 ml-[400px]">"</h1>
                <p> Chat gpt testimonial sample, Being associated with Four Leaf Clover has been a delight. Their commitment to quality, exceptional customer service, and ethical practices make them a standout company. Their services allow me to Free up my time for strategic thinking.<br></br>
                <span className="ml-[300px]">Person one, company name</span></p>
                </div>
            <div className="w-[400px] h-[400px] bg-green-700 border-solid border-[1.5px] mt-[100px] border-green-700 rounded-full pl-[70px] pt-[27px] mt[100]  ">
                         <Image className="h-[300px] w-auto " alt="kt" src={Kaliketi} />
            </div>
            
            </div>
        </div>
        

        
    )
}

