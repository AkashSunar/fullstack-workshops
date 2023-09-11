// import { useState } from "react";
import NoteForm from "./components/NoteForm";
import Note from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";


const App = () => {
  // const [filter, setFilter] = useState("ALL");

  return (
    <div>
      <VisibilityFilter />
      <NoteForm />
      <Note />
    </div>
  );
};

export default App;
