import "../Datainloop/card.css";
import CardData from "./CardData";

function Card(props) {
  return (
    <>
      <div className="card">
        <h1>{props.data.Name}</h1>
        <h1>{props.data.Email}</h1>
        <h1>{props.data.Mo}</h1>
      </div>
    </>
  );
}

export default Card;
