const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose') 
const notesController = require("./controllers/notes")
const usersController = require("./controllers/users")
const loginController=require("./controllers/login")
const { url} = require("./utils/config")
const { errorHandler, noHandler } = require("./utils/middleware")

mongoose.set('strictQuery', false)
mongoose.connect(url)

app.use(express.json());
app.use(cors());
app.use(express.static("dist"))
app.use("/api/notes", notesController)
app.use("/api/users", usersController)
app.use("/api/login",loginController)

app.use(errorHandler)
app.use(noHandler)
module.exports = app;
