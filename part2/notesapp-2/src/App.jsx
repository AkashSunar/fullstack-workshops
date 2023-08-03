import { useState, useEffect } from "react";
import Note from "./components/Note";
import axios from "axios";
import noteServices from "./services/note";
import Notification from "./components/Notification";

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    console.log("hello");
    //1. get data from backend server
    let myAxiosPromise = noteServices.getAll();
    myAxiosPromise.then((myData) => {
      console.log("returned promise");
      console.dir(myData);
      myData.push({ id: 100, content: "this is fake note", important: true });
      //2. put the data into notes state
      setNotes(myData);
    });

    console.log(myAxiosPromise);
  }, []);

  const notesToShow = notes.filter((note) => (showAll ? true : note.important));

  const handleSubmit = (event) => {
    event.preventDefault();
    let myNote = {
      content: newNote,
      id: notes.length + 1,
      important: Math.random() > 0.5,
    };
    let postPromise = noteServices.create(myNote);
    postPromise.then((result) => {
      setNotes(notes.concat(result.data));
    });
    setNewNote("");

    console.log("form has been submitted");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const updateData = (id) => {
    let currentNote = notes.find((note) => {
      return note.id === id;
    });
    let updatedNote = { ...currentNote, important: !currentNote.important };
    let putPromise = noteServices.update(id, updatedNote);
    putPromise
      .then((result) => {
        console.dir(result);
        let updatedNote = result.data;
        setNotes(
          notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
        );
      })
      .catch((error) => {
        console.log("some error has been occured");
        console.log(error);
        if (error.response.status === 404) {
          console.log("this means the id doesnot exist in the server");
          setNotification(
            `sorry the note "${currentNote.content}"does not exist`
          );
          setTimeout(() => {
            setNotification("");
          }, 2000);
          setNotes(notes.filter((note) => note.id !== currentNote.id));
        } else {
          console.log("this is some other erro");
        }
      });
  };
  const myStyle = { fontSize: "60px" };
  return (
    <>
      <h1 style={myStyle} className="redBackground">
        Notes
      </h1>
      <Notification message={notification} />
      <button onClick={handleShowAll}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((value) => {
          return (
            <Note
              key={value.id}
              note={value}
              updateNote={() => {
                updateData(value.id);
              }}
            />
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
