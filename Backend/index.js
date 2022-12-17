const express = require('express');
const yahooStockAPI = require('yahoo-stock-api').default;
const yahoo = new yahooStockAPI();
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors()) // To remove cors error

// API to fetch details 
app.get('/:code', async (req,res) =>{
    
    try{
        console.log("here")
    const {code} = req.params
    const data = await yahoo.getSymbol({ symbol: code })

    // Response JSON
    const response = {open:data.response.open,previousClose:data.response.previousClose}
    res.status(200).json(response);
    }catch(err){
        res.status(400).json({message:"Something went wrong"})
    }
    
})
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})