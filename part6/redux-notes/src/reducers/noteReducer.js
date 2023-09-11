import { createSlice } from "@reduxjs/toolkit";
import notesServices from "../services/notes";

const noteReducer = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      const newState = state.concat(action.payload);
      return newState;
    },
    toggleImportantOf(state, action) {
      let myNote = state.find((note) => note.id === action.payload);
      console.log(myNote, "bbbb");
      let changedNote = { ...myNote, important: !myNote.important };
      //   changedNote.important = !changedNote.important;
      return state.map((note) =>
        note.id === changedNote.id ? changedNote : note
      );
    },
  },
});

const { createNote, toggleImportantOf } = noteReducer.actions;
// const makeNote = (newNote) => {
//   return async (dispatch) => {
//     const myNote = notesServices.createNew(newNote);
//     dispatch(createNote(newNote))
//   }
// }

// const noteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEW_NOTE": {
//       const newState = state.concat(action.payload);
//       return newState;
//     }
//     case "TOGGLE_IMPORTANCE": {
//       let myNote = state.find((note) => note.id === action.payload.id);
//       let changedNote = { ...myNote, important: !myNote.important };
//       //   changedNote.important = !changedNote.important;
//       return state.map((note) =>
//         note.id === changedNote.id ? changedNote : note
//       );
//     }
//     default:
//       return state;
//   }
// };
// const createNote = (newNote) => {
//   return {
//     type: "NEW_NOTE",
//     payload: newNote,
//   };
// };
// const toggleImportantOf = (id) => {
//   return {
//     type: "TOGGLE_IMPORTANCE",
//     payload: {
//       id,
//     },
//   };
// };
export { createNote, toggleImportantOf };
export default noteReducer.reducer;
