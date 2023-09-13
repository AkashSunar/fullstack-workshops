// import { useState } from "react";
import { useEffect } from "react";
import NoteForm from "./components/NoteForm";
import Note from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
import { useDispatch } from "react-redux";
import { createNote } from "./reducers/noteReducer";
import services from "./services/notes";


const App = () => {
  // const [filter, setFilter] = useState("ALL");
  const dispatch = useDispatch();
  useEffect(() => {
    services.getAll().then((response) => {
      dispatch(createNote(response));
    });
  }, []);

 

  return (
    <div>
      <VisibilityFilter />
      <NoteForm />
      <Note />
    </div>
  );
};

export default App;
