import React from 'react';
import NavBar from "./components/navBar/navBar";
import Search from "./components/search/searchContainer";
import Catalog from "./components/catalog/catalog";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Search/>
      <Catalog/>
    </div>
  );
}

export default App;
