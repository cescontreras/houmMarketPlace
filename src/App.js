import React, { useEffect, useState } from 'react';
import NavBar from "./components/navBar/navBar";
import Search from "./components/search/searchContainer";
import Catalog from "./components/catalog/catalog";
import Top from "./components/topbutton/Top"
import './App.css';
import axios from 'axios';

function App() {

  const [pokemons, setPokemons] = useState([])

  const getByName = async(name) => {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)    
    setPokemons([...pokemons, data])
  }

  // const getByType = async(type) => {
  //   const {data} = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
  //   return data.pokemon;    
  // }

  // const getPokemons = async (query) => {
  //   setPokemons([])
  //   const p = await getByType(query);    
  //   p && p.map(p => {
  //     const {data} = axios.get(p.pokemon.url)
  //     setPokemons([...pokemons, data])
  //   })
  // }
  
  useEffect(() => {
    // getPokemons('ground')
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <Search getByName={getByName}/>
      <Catalog pokemons={pokemons}/>
      {/* <Footer /> */}
      <Top />
    </div>
  );
}

export default App;
