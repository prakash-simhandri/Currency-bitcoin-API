const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose")
require('dotenv').config()
const port = process.env.PORT
var NomiceModel_currency = require('./routes/DB_controllers/currency_schema')
var NomiceModel_ticker = require('./routes/DB_controllers/ticker_schema')


mongoose.connect('mongodb://localhost/nomics_db', { useUnifiedTopology: true, useNewUrlParser: true, })

const db = mongoose.connection;
// Added check for DB connection

if (!db) {
  console.log("Error connecting db")
}else{
  console.log("Db connected successfully")
}


const CurrenciesMetadata = express.Router();
app.use('/',CurrenciesMetadata);
require("./routes/CurrenciesMetadata")(CurrenciesMetadata, axios,NomiceModel_currency)

const CurrenciesTicker = express.Router()
app.use("/", CurrenciesTicker);
require("./routes/TickerMetadata")(CurrenciesTicker, axios,NomiceModel_ticker)


app.listen(port, () => console.log(`this is your port ${port}`))