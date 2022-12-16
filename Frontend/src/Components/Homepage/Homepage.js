import React, { useState } from "react";
import SearchBar from "../Searchbar/SearchBar";
import Display from "../Display/Display";
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="Homepage-Container">
      <SearchBar/>
      <Display/>
    </div>
  );
};

export default Homepage;
