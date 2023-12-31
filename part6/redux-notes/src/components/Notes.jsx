import { toggleImportantOf } from "../reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";
const Note = () => {
  const filter = useSelector((state) => {
    return state.filter;
  });
  const dispatch = useDispatch();
  const notes = useSelector((state) => {
    if (filter === "ALL") {
      return state.notes;
    }
    
    return filter === "IMPORTANT"
      ? state.notes.filter((note) => note.important)
      : state.notes.filter((note) => !note.important);
  });

  const toggleImportant = (id) => {
    dispatch(toggleImportantOf(id));
  };
  return (
    <ul>
      {notes.map(
        (
          note //using notes() in place of store.getState()
        ) => (
          <li
            key={note.id}
            onClick={() => {
              toggleImportant(note.id);
            }}
          >
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        )
      )}
    </ul>
  );
};

export default Note;
