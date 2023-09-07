import {toggleImportantOf } from "../reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";
const Note = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => {
    return state;
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
