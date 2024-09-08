import Image from "next/image";
import Kaliketi from "/public/Images/kalikt.png";

export default function Testimonial() {
    return (
        <div className="uppertestimonial flex flex-col space-y-12">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12 justify-center">
                <div className="flex-3 lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] bg-green-700 border border-green-700 rounded-full flex items-center justify-center">
                    <Image
                        className="w-[400px] lg:w-[300px] h-auto"
                        alt="kt"
                        src={Kaliketi}
                    />
                </div>
                <div className="flex-4 texttestimonial flex flex-col w-full lg:w-[900px] text-center lg:text-left mt-6 lg:mt-0 p-4">
                    <p className="text-base lg:text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br />
                    </p>
                    <h4 className="block mt-4 lg:text-lg text-right font-bold lg:text-center justify-center">
                        Person Two, Company Name
                    </h4>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-12 justify-center">
                <div className="flex-4 texttestimonial flex flex-col w-full lg:w-[900px] text-center lg:text-left mt-6 lg:mt-0 p-4">
                    <p className="text-base lg:text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <br />
                    </p>
                    <h4 className="block mt-4 lg:text-lg font-bold text-right lg:text-center">
                        Person Two, Company Name
                    </h4>
                </div>
                <div className="flex-3 lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] bg-green-700 border border-green-700 rounded-full flex items-center justify-center">
                    <Image
                        className="w-[200px] lg:w-[300px] h-auto"
                        alt="kt"
                        src={Kaliketi}
                    />
                </div>
            </div>
        </div>
    );
}
