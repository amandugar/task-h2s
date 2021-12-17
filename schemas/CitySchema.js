const mongoose = require("mongoose")

const CitySchema = mongoose.Schema({
  full_name: String,
  city: String,
  email: String,
  number: Number,
  url: String,
})

const City = mongoose.model("cities", CitySchema)
module.exports = City
