import { BrowserRouter, Routes, Route, Link,Navigate} from "react-router-dom";
import Notes from "./Notes";
import Note from "./Note";
import Login from "./Login";
import { useState } from "react";
const notes = [
  {
    content: "the app state is in redux store",
    important: true,
    id: 1,
  },
  {
    content: "helo",
    important: true,
    id: 2,
  },
  {
    content: "kkkkk",
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
  const padding = {
    padding: 5,
  };

  return (
    <BrowserRouter>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            login
          </Link>
        )}
      </div>

      <Routes>
        <Route path="/notes/:id" element={<Note notes={notes} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </BrowserRouter>
  );
};
export default App;
