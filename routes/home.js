const City = require("../schemas/CitySchema")
const Team = require("../schemas/TeamSchema")
const mergeTwoJsonObjects = require("../utils/mergeTwoJsonObjects")

module.exports = async (req, res) => {
  const cities = await City.find({})

  const emails = cities.map(city => city.email)

  const teams = await Team.find({ email: { $in: emails } })

  const result = mergeTwoJsonObjects(cities, teams, "email")

  res.render("index", { result })
}
