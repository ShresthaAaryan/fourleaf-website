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
    <div className="flex flex-wrap container-cards ml-32">
      {data && data.map((item)=>{
        return(
        <div key={item.Department} className="flex-grow basis-80 cards-detail">
          <CardsWithDet item={item}/>
        </div>)
      })}
    </div>
  );
}
