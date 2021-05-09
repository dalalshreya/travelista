
var hoteld=require('../models/hotels.js');

async function getHotels(){
    return await fetch('http://localhost:3000/hotels')
          .then((res) => res.json())
          .then((data) => data);
  }

  