// creating schema and class

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//creating schema
let hotelSchema = new Schema({
   // id:Number,
    id:String,
    title:String,
    date:Date,
    description: String,
    text: String,
    country: String,
    imageUrl: String
});
//Creating model
let Hotel = mongoose.model('Hotel', hotelSchema);


module.exports = {
    Hotel : Hotel
}