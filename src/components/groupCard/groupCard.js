import CardsWithDet from "../cardsWithDet/cardsWithDet";
import './groupCard.css'

export default function GroupCard() {
  const data=[
    {"Department":"CEO","Detail":"Hello it is ceo"},
    {"Department":"Finance","Detail":"Hello it is ceo"},
    {"Department":"BI","Detail":"Hello it is ceo"},
    {"Department":"Operations","Detail":"Hello it is ceo"},
    {"Department":"IT","Detail":"Hello it is ceo"},
    {"Department":"SALES","Detail":"Hello it is ceo"},
    {"Department":"Marketing","Detail":"Hello it is ceo"},
    {"Department":"Services","Detail":"Hello it is ceo"}]
  return (
    // <div className="flex flex-wrap container-cards ml-32">
    //   {data && data.map((item)=>{
    //     return(
    //     <div key={item.Department} className="flex-grow basis-80 cards-detail">
    //       <CardsWithDet item={item}/>
    //     </div>)
    //   })}
    // </div>
    <div className="mt-16">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 px-6 py-8">
        <div className="flex-1 text-center lg:text-center lg:ml-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-8">
            Mission statement:
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            To provide reliable, web-based customer experiences that align with clients' internal processes, while delivering expert outsourcing solutions with a goal to streamline operations, reduce costs, and enhance customer service, empowering organizations to focus on growth and success.
          </p>
        </div>
        <div className="flex-1 mt-6 lg:mt-0 flex justify-center font-bold">
          <p>Optimizing Operations, Maximizing Growth</p>
        </div>
      </div>
    </div>
  );
}
