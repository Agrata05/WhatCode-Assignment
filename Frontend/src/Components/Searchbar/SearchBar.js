import React, { useState } from "react";
import data from "../../Assets/stocks";
import {
  Autocomplete,
  TextField,
} from "@mui/material";
const stocksNames = Object.keys(data);
console.log(stocksNames[1]);
console.log(stocksNames);

const SearchBar = () => {
  return (
    <div>
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
        }}
      />
    </div>
  );
};

export default SearchBar;
