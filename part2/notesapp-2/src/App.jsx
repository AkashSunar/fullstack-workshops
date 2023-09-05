import { useState, useEffect,useRef } from "react";
import Note from "./components/Note";
import noteServices from "./services/note";
import loginServices from "./services/login";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import LoginForm from "./components/LoginForm";
import NoteForm from "./components/NoteForm";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [notification, setNotification] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const noteFormRef = useRef();

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
    //lets get user from local storage if available
    let myUser = window.localStorage.getItem("noteUser");
    if (myUser) {
      setUser(JSON.parse(myUser));
    }

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

    noteFormRef.current.toggleVisibility;
    let postPromise = noteServices.create(myNote, user.token);
    postPromise
      .then((result) => {
        console.log(result.data);
        setNotes(notes.concat(result.data));
        setNewNote("");
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setNotification(error.response.data.error);
        setTimeout(() => {
          setNotification("");
        }, 2000);
        if (error.response.data.error === "token expired") {
          setUser(null);
          window.localStorage.removeItem("noteUser");
        }
      });
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
          // console.log("this means the id doesnot exist in the server");
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
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("logging in with", username, password);
    try {
      let loggedinUser = await loginServices.login({ username, password });
      setUser(loggedinUser);
      window.localStorage.setItem("noteUser", JSON.stringify(loggedinUser));
    } catch (error) {
      setNotification(error.response.data.error);
      setTimeout(() => {
        setNotification("");
      }, 2000);
    }
  };

  const myStyle = { fontSize: "60px" };

  const loginForm = () => {
    return (
      <Togglable buttonLabel="login">
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
        />
      </Togglable>
    );
  };
  const noteForm = () => {
    return (
      <Togglable buttonLabel="new note" ref={noteFormRef}>
        <NoteForm
          onSubmit={handleSubmit}
          value={newNote}
          handleChange={handleChange}
        />
      </Togglable>
    );
  };
  return (
    <>
      <h1 style={myStyle} className="redBackground">
        Notes
      </h1>
      <Notification message={notification} />
      <h1>login form</h1>
      {user === null ? loginForm() : noteForm()}

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
    </>
  );
};

export default App;
