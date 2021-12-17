const mongoose = require("mongoose")

const TeamSchema = mongoose.Schema({
  full_name: String,
  team_name: String,
  email: String,
})

const Team = mongoose.model("teams", TeamSchema)

module.exports = Team
