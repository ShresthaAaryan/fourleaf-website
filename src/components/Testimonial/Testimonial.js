import Image from "next/image";
import Kaliketi from "/public/Images/kalikt.png";
import Bijaya from "/public/Images/bijaya.png";
import Luisa from "/public/Images/luisa.png";

export default function Testimonial() {
    return (
        <div className="uppertestimonial flex flex-col space-y-12">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12 justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-3 lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] bg-green-700 border border-green-700 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                        className="w-[400px] lg:w-[300px] h-auto"
                        alt="kt"
                        src={Bijaya}
                    />
                </div>
                <div className="flex-4 texttestimonial flex flex-col w-full lg:w-[900px] text-center lg:text-left mt-6 lg:mt-0 p-4">
                    <p className="text-base lg:text-lg">
                        I am truly impressed by Four Leaf Clover&apos;s young and enthusiastic team. Their dynamic energy, innovative ideas, and adaptability set them apart. They bring a fresh perspective to every task, leveraging modern tools and fostering strong client relationships. Their passion for excellence and future-oriented vision make them a reliable and exceptional partner. I highly recommend them.
                        <br />
                    </p>
                    <h4 className="block mt-4 lg:text-lg text-right font-bold lg:text-center justify-center">
                        Bijaya Gurung, Company Name
                    </h4>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-12 justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-4 texttestimonial flex flex-col w-full lg:w-[900px] text-center lg:text-left mt-6 lg:mt-0 p-4">
                    <p className="text-base lg:text-lg">
                        Working with Four Leaf Clover was an absolute pleasure, even with language barriers and time zone differences. The team’s professionalism, clear communication, and adaptability made the entire process seamless. Their commitment to understanding my needs and ensuring everything was handled efficiently truly stood out. I highly recommend Four Leaf Clover for their dedication to making the experience easy and stress-free.
                        <br />
                    </p>
                    <h4 className="block mt-4 lg:text-lg font-bold text-right lg:text-center">
                        Luisa Veibete, Company Name
                    </h4>
                </div>
                <div className="flex-3 lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] bg-green-700 border border-green-700 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                        className="w-[200px] lg:w-[300px] h-auto"
                        alt="kt"
                        src={Luisa}
                    />
                </div>
            </div>
        </div>
    );
}
