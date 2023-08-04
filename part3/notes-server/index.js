const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.static("dist"))

// const requestLogger = 

let notes = [
  {
    id: 1,
    content: "Data structure and algorithm",
    important: true
  },
  {
    id: 2,
    content: "electronics circuit device",
    important: false
  },
  {
    id: 3,
    content: "wireless communications",
    important: true
  }
]
// app.get("/",(request, response) => {
//     response.send("<h1>hello akash</h1>");
// })


app.get("/api/notes",(request, response) => {
    response.json(notes);
})
app.get("/api/notes/:id", (request, response) => {
    const myId = Number(request.params.id);
    const myNote = notes.find(note => note.id === myId)
    myNote ? response.json(myNote) : response.status(404).send(`there is no note in ${myId}`)
});
app.delete("/api/notes/:id", (request, response) => {
    const myId = Number(request.params.id);
    notes = notes.filter(note => note.id !== myId)
    response.status(204).send(`the note in id ${myId} is deleted`);
});
app.post('/api/notes', (request, response) => {
    const myNewPost = request.body;
    myNewPost.id = notes.length + 1;
    notes.push(myNewPost);
    response.status(201).json(myNewPost)
})

app.put("/api/notes/:id", (request, response) => {
  const myId = Number(request.params.id);
  const updatedNOte = request.body;
  let noteFound = false;
  notes = notes.map((note) => {
    if (note.id !== myId) return note;
    else {
      noteFound = true;
      return updatedNOte;
    }
  })
  
  if (noteFound) {
    response.status(202).json(updatedNOte)
  } else {
    response.status(404).send(`there is no note in ${myId}`)
  }
});

app.use((request, response, next) => {
  response.status(404).send("no url available")
  next()
}
)
const PORT = process.env.PORT?process.env.PORT: 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)