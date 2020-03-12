var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DB_model = new Schema({
    id:String,
    currency:String,
    symbol:String,
    name:String,
    logo_url:String,
    rank:String,
    price:String,
    price_date:String,
    market_cap:String,
    circulating_supply:String,
    max_supply:String,
    high:String,
    high_timestamp:String,
    '1d':Object,
    '7d':Object,
    '30d':Object,
    '365d':Object,
})

module.exports = mongoose.model('currencies_ticker',DB_model);