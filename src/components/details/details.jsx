import Image from "next/image";
import Team1 from "../../../public/Images/team1.png";

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
          <div className="w-full md:ml-28 flex flex-col space-y-4 md:mt-32">
            <div className="grid grid-cols-2 gap-20 mb-6">
              <div className="text-left">
                <p className="text-2xl sm:text-5xl font-bold text-green-600 text-center">
                  10,000 +
                </p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">
                  Visa Applications
                </p>
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-5xl font-bold text-green-600 text-center">
                  10,000+
                </p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">COE Issued</p>
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-5xl font-bold text-green-600 text-center">
                  100+
                </p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">
                  Daily Virtual Reception Calls
                </p>
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-5xl font-bold text-green-600 text-center">
                  15,000 +
                </p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">
                  College Applications
                </p>
              </div>
              <div className="mb-4">
                <p className="text-lg sm:text-5xl font-bold text-green-600 text-center">$$$</p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">
                  Thousands of Dollars Saved on Operating Cost
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-5xl font-bold text-green-600 text-center">30%</p>
                <p className="text-xs sm:text-xl text-gray-600 text-center">Lead Conversion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
