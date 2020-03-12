var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DB_model = new Schema({
    id:String,
    original_symbol:String,
    name:String,
    description:String,
    website_url:String,
    logo_url:String,
    blog_url:String,
    discord_url:String,
    facebook_url:String,
    github_url:String,
    medium_url:String,
    reddit_url:String,
    telegram_url:String,
    twitter_url:String,
    whitepaper_url:String,
    youtube_url:String,
    replaced_by:String,
    markets_count:String
});

module.exports = mongoose.model('currencies_table',DB_model);