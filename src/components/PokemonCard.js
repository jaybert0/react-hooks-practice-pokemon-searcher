import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({key, name, hp, sprites}) {
  const [ cardSide, setCardSide] = useState(sprites.front)
  function handleClick() {
    setCardSide(prevState => !prevState)
  }
  
  return (
    <Card >
      <div onClick={handleClick}>
        <div className="image">
          <img src= {
            cardSide ? sprites.front : sprites.back 
          }
           alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
