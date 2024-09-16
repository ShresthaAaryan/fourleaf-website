import CardsWithDet from "../cardsWithDet/cardsWithDet";

export default function GroupCard() {
  const data=[{"Department":"CEO","Detail":"Hello it is ceo"},{"Department":"Finance","Detail":"Hello it is ceo"},{"Department":"BI","Detail":"Hello it is ceo"},{"Department":"IT","Detail":"Hello it is ceo"},{"Department":"SALES","Detail":"Hello it is ceo"},{"Department":"Marketing","Detail":"Hello it is ceo"}]
  return (
    <div className="flex flex-wrap">
      {data && data.map((item)=>{
        return(
        <div key={item.Department} className="flex-grow basis-52">
        <CardsWithDet item={item}/>
      </div>)
      })}
    </div>
  );
}
