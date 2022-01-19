import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeData}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokeData.map(data => 
      <PokemonCard key={data.id} name={data.name} hp={data.hp} sprites={data.sprites} />)}
    </Card.Group>
  );
}

export default PokemonCollection;

