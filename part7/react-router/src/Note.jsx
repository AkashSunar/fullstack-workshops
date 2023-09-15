import { useParams } from "react-router-dom";
const Note = ({ notes }) => {
    const id = useParams().id;
    console.log(useParams())
  const note = notes.find((note) => note.id == id);
  return (
    <>
          <h2>Here is the note of {id}</h2>
      <li>
        {note.content}
        <strong>{note.important ? "important" : ""}</strong>
      </li>
    </>
  );
};

export default Note;
