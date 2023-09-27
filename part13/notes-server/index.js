const express = require('express')
const app = express()
app.use(express.json());
const notesRouter = require("./controllers/notes");
app.use("/api/notes", notesRouter);


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})