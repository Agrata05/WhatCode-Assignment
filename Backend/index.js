const express = require('express');
const yahooStockAPI = require('yahoo-stock-api').default;
const yahoo = new yahooStockAPI();
const app = express();

yahoo.getSymbol({ symbol: 'AAPL' }).then(console.log);
app.listen(3000)