import React, { useState } from "react";
import SearchBar from "../Searchbar/SearchBar";
import stock from '../../Assets/images/stock.jpg'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="Homepage-Container">
      <div className="Homepage-Logo">
      <img src={stock} alt="stock"/>
      </div>
      <SearchBar/>
    </div>
  );
};

export default Homepage;
