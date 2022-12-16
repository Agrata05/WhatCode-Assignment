import React, { useState } from "react";
import data from "../../Assets/stocks";
import Display from "../Display/Display";
import axios from 'axios'
import './SearchBar.css'
import {
  Autocomplete,
  TextField,
} from "@mui/material";
const stocksNames = Object.keys(data);
console.log(stocksNames[1]);
console.log(stocksNames);

const SearchBar = () => {
   
    const [Price,setPrice] = useState("");

  const searchHandler = async (code) =>{
    const res = await axios.get('http://localhost:8081/'+code);
    
    setPrice({...res.data});
    console.log("SearchBar")
    console.log(Price)
  }

  return (
    <div className="SearchBar-Container">
      <Autocomplete
        id="stocks-list"
        options={stocksNames}
        sx={{margin:"20px", 
            width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="With categories" />
        )}
        onChange={(event, value, reason) => {
            console.log('event: ', event);
            console.log('reason: ', reason);
            console.log('value: ', value);
            console.log("code",data[value]);
            searchHandler(data[value])
        }}
      />
      {Price?<Display data={Price}/>:<Display/>}
    </div>
  );
};

export default SearchBar;
