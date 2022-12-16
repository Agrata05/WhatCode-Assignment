const express = require('express');
const yahooStockAPI = require('yahoo-stock-api').default;
const yahoo = new yahooStockAPI();
const cors = require('cors')
const app = express();
app.use(cors())
app.get('/:code', async (req,res) =>{
    console.log("here")
    const {code} = req.params
    const data = await yahoo.getSymbol({ symbol: code })
    const response = {open:data.response.open,previousClose:data.response.previousClose}
    res.json(response);
})
app.listen(8081)