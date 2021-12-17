// Importing Modules
const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")

// Importing External Files
const home = require("./routes/home")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")

mongoose.connect(
  "mongodb+srv://amandugar:amandugar@cluster0.y6axd.mongodb.net/task-h2s?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

app.get("/", home)

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
