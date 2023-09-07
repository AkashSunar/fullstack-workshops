import { useState } from "react";
import NoteForm from "./components/NoteForm";
import Note from "./components/Notes";

const App = () => {
  const [filter, setFilter] = useState("ALL");
  const filterSelected = (filter) => {
    setFilter(filter);
  };

  return (
    <div>
      <div>
        all{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("ALL")}
        />
        important{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("IMPORTANT")}
        />
        nonimportant{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("NONIMPORTANT")}
        />
      </div>
      <NoteForm />
      <Note filter={filter} />
    </div>
  );
};

export default App;
