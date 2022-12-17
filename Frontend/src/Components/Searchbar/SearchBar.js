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

const SearchBar = () => {
   
    const [Price,setPrice] = useState("");
    const [isLoading,setIsLoading] = useState(false);

  const searchHandler = async (code) =>{
    try{
        setIsLoading(true);
        const res = await axios.get('http://localhost:8081/' + code);
        setIsLoading(false)
        setPrice({...res.data});
        console.log(Price)
    }
    catch(err){
        // Error Handeling
        console.log(err)
        setIsLoading(false);
    }
    
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
            searchHandler(data[value])
        }}
      />
      {Price?<Display loading={isLoading} data={Price}/>:<Display loading={isLoading}/>}
    </div>
  );
};

export default SearchBar;
