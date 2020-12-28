import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar/navBar";
import Search from "./components/search/searchContainer";
import Catalog from "./components/catalog/catalog";
import Top from "./components/topbutton/Top";
import "./App.css";
import axios from "axios";

function App() {

	const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([])

	const [nextPage, setNextPage] = useState();
	const [prevPage, setPrevPage] = useState();

	const [filter, setFilter] = useState(false);
  
	const getByName = async (name) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemons([...pokemons, data])    
  };

  const filterPokemons = (filter) => {
    setFilter(true)
    console.log(filter);
    
    const filtered = pokemons.filter((p) => p.types[0].type.name === filter)    
    setFilteredPokemons(filtered)    
  };
  
  const getAll = async (url) => {
    const { data } = await axios.get(url);
    return data;
  };

  console.log('p', pokemons);
  console.log('f', filteredPokemons);

  
	const getRefs = async () => {
		const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=15&offset=15");
		setPrevPage(data.previous);
    setNextPage(data.next);
    
    const pokemons = await getPokemons(data.results)
    setPokemons(pokemons);      
  };
  
  const getPokemons = async (data) => {
      return Promise.all(data.map((ref) => getAll(ref.url)))    
  };

  const clear = () => {
    setPokemons([])
  };

	useEffect(() => {
		getRefs()
  }, []);

	return (
		<div className="App">
			<NavBar />
			<Search getByName={getByName} clear={clear} setFilter={setFilter} filterPokemons={filterPokemons}/>
			<Catalog pokemons={filter ? filteredPokemons : pokemons} />
			{/* <Footer /> */}
			<Top />
		</div>
	);
}

export default App;
