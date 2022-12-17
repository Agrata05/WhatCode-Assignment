import React, { useState } from "react";
import axios from 'axios'
import './SearchBar.css'
import {
    Autocomplete,
    TextField,
  } from "@mui/material";

// Stock Symbol JSON 
import data from "../../Assets/stocks";
import Display from "../Display/Display";


const stocksNames = Object.keys(data);

const SearchBar = () => {
   
    const [Price,setPrice] = useState(""); // String the prices of Stocks
    const [isLoading,setIsLoading] = useState(false); // Storing the state of the loader

  const searchHandler = async (name) =>{
    try{
        if(name){
            // Setting Loader True
            setIsLoading(true); 

            // Fetching Data from backend
            const res = await axios.get('http://localhost:8081/' + data[name]);
            // Setting Loader to False

            setIsLoading(false)
            if(res.status === 200){
                setPrice({...res.data,name}); // Updating State
                console.log(Price)
            }
            else if(res.status === 400){
                console.log("Something went wrong")
            }
        }     
    }
    catch(err){
        //For Error Handeling
        setIsLoading(false);
        console.log(err)
    } 
}

  return (
    <div className="SearchBar-Container">
      <Autocomplete
        id="stocks-list"
        options={stocksNames}
        sx={{margin:"20px", 
            width: "20vw" }}
        renderInput={(params) => (
          <TextField {...params} label="With categories" />
        )}
        onChange={(event, value, reason) => {
            searchHandler(value)
        }}
      />
      {Price?<Display loading={isLoading} data={Price}/>:<Display loading={isLoading}/>}
    </div>
  );
};

export default SearchBar;
