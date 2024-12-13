import Image from "next/image";
import Team1 from "../../../public/Images/team.png";

export default function Details() {
  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Left Section */}
          <div className=" w-full mb-8 md:mb-0 ">
            <h1 className="text-4xl text-center sm:text-7xl sm:text-start font-bold text-green-600 mb-2">
              At Four Leaf Clover,
            </h1>
            <h2 className="text-4xl text-center sm:text-7xl sm:text-start font-extrabold text-gray-500 mb-6">
              We Deliver
            </h2><br/><br/>
            <div className="bg-green-700 border rounded-t-full flex items-center justify-center">
              <Image
                className="max-h-full"
                alt="Team"
                src={Team1}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:ml-28 flex flex-col space-y-4 md:mt-18">
            <div className="grid grid-cols-2 gap-20 mb-6">
              <div className="text-left">
                <p className="text-2xl sm:text-5xl font-bold text-green-600 text-center">
                  8000+
                </p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">
                  Successful Client Consultations
                </p>
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-5xl font-bold text-green-600 text-center">
                  2,500+
                </p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">
                  Social Media Campaigns Executed
                </p>
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-5xl font-bold text-green-600 text-center">
                  8,000+ 
                </p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">
                  High-Converting SEO Articles Written
                </p>
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-5xl font-bold text-green-600 text-center">
                  15,000+
                </p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">
                  Leads Generated and Nurtured
                </p>
              </div>
              <div className="mb-4">
                <p className="text-lg sm:text-5xl font-bold text-green-600 text-center">
                  $$$
                </p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">
                  Thousands Saved on Operational Costs for Our Clients
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-5xl font-bold text-green-600 text-center">30%</p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">Lead Conversion</p>
              </div>
            </div>
            <p>Whether it’s expert client servicing, creative content strategies, or data-driven lead generation, Four Leaf Clover ensures excellence in every step to empower your business growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
