import { toggleImportantOf } from "../reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";
const Note = ({ filter }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => {
    if (filter === "ALL") {
      return state;
    }
    // if (filter === "IMPORTANT") {
    //   return state.filter((note) => {
    //     if (note.important===true) {
    //       return true;
    //     }
    //   });
    // }
    // if (filter === "NONIMPORTANT") {
    //   return state.filter((note) => {
    //     if (note.important===false) {
    //       return true;
    //     }
    //   });
    // }
    return filter === "IMPORTANT"
      ? state.filter((note) => note.important)
      : state.filter((note) => !note.important);
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
