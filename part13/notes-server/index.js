const express = require('express')
const app = express()
app.use(express.json());
const notesRouter = require("./controllers/notes");
app.use("/api/notes", notesRouter);
const {PORT}=require("./utils/config")
const {connectToDatabase}=require("./utils/db")

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()