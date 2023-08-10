const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose')
require("dotenv").config()


const url =process.env.MONGODB_URI
  

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema)

app.use(express.json());
app.use(cors());
app.use(express.static("dist"))

let notes = []

app.get("/api/notes", (request, response) => {
  Note.find({}).then((result)=>{response.json(result)})
    })
app.get("/api/notes/:id", (request, response,next) => {
  Note.findById(request.params.id).then((result) => {
    result ? response.json(result) : response.status(404).send(`there is no note in ${request.params.id}`)
    
  }).catch(e => {
    next(e);
  })
});
app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})
app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
})
app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

app.use((request, response, next) => {
  response.status(404).send("no url available")
  next()
}
)
const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)