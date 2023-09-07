// import { useState } from "react";
import NoteForm from "./components/NoteForm";
import Note from "./components/Notes";
import VisinilityFilter from "./components/VisibilityFilter";


const App = () => {
  // const [filter, setFilter] = useState("ALL");

  return (
    <div>
      <VisinilityFilter />
      <NoteForm />
      <Note />
    </div>
  );
};

export default App;
