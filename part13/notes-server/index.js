const express = require('express')
const app = express()
app.use(express.json());
const notesRouter = require("./controllers/notes");
const loginRouter = require("./controllers/login");
const userRouter=require("./controllers/users")
app.use("/api/notes", notesRouter);
app.use("/api/login", loginRouter);
app.use("/api/users",userRouter)
const {PORT}=require("./utils/config")
const {connectToDatabase}=require("./utils/db")

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()