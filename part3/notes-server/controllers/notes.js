const app = require("express").Router()
const Note=require("../models/note")
app.get("/", (request, response) => {
  Note.find({}).then((result)=>{response.json(result)})
    })
app.get("/:id", (request, response,next) => {
  Note.findById(request.params.id).then((result) => {
    result ? response.json(result) : response.status(404).send(`there is no note in ${request.params.id}`)
    
  }).catch(e => {
    next(e);
  })
});
app.delete('/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})
app.post('/', (request, response,next) => {
  const body = request.body
  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  }).catch((error=>{next(error)}))
})
app.put('/:id', (request, response, next) => {
  const body = request.body
  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true,runValidators:true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

module.exports = app;