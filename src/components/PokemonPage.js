import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage() {
  const [pokeData, setPokeData] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [wholeData, setWholeData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
        .then(response => response.json())
        .then(data => {
          setPokeData(data);
          setWholeData(data)
        });
  },[])
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchValue={searchValue} wholeData={wholeData} setSearchValue={setSearchValue} pokeData={pokeData} setPokeData={setPokeData} />
      <br />
      <PokemonCollection pokeData={pokeData}/>
    </Container>
  );
}

export default PokemonPage;
