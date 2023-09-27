import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom";
import Notes from "./Notes";
import Note from "./Note";
import Login from "./Login";
import { useState } from "react";
// import { Nav, Navbar } from "react-bootstrap";
// import { Container,AppBar,Toolbar,Button } from "@mui/material";
import { Navigation,Footer,Page} from "./components/Button";
const notes = [
  {
    content: "the app state is in redux store",
    important: true,
    id: 1,
  },
  {
    content: "this is important note",
    important: true,
    id: 2,
  },
  {
    content: "hey, you look beautiful in smile",
    important: true,
    id: 3,
  },
];

const Home = () => (
  <div>
    {" "}
    <h2>TKTL notes app</h2>{" "}
  </div>
);

const Users = () => (
  <div>
    {" "}
    <h2>Users</h2>{" "}
  </div>
);

const App = () => {
  const [user, setUser] = useState(null);
  const match = useMatch("/notes/:id");
  const note = match ? notes.find((note) => note.id == match.params.id) : null;
  const padding = {
    padding: 15,
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    textDecoration:"none"
  };

  return (
    <Page>
      <Navigation>
        <Link style={padding} to="/">
          Home
        </Link>
        <Link style={padding} to="/notes">
          Notes
        </Link>
        <Link style={padding} to="/users">
          Users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            Login
          </Link>
        )}
      </Navigation>
      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer>
        <em>Note app, Department of Computer Science 2022</em>
      </Footer>
    </Page>
  );
};
export default App;
