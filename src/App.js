import React from 'react';
import NavBar from "./components/navBar/navBar";
import Search from "./components/search/searchContainer";
import Catalog from "./components/catalog/catalog";
import Top from "./components/topbutton/Top"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Search/>
      <Catalog/>
      <Top />
    </div>
  );
}

export default App;
