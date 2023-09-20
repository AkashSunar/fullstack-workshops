import { Link } from "react-router-dom";
// import { Table } from "react-bootstrap";
import { TableContainer,Table,TableBody,TableCell,TableRow} from "@mui/material";
const Notes = ({ notes }) => {
  return (
    <>
      <h2>your notes</h2>
      <TableContainer>
        <Table>
          <TableBody>
            {notes.map((note) => (
              <TableRow key={note.id}>
                <TableCell>
                  <Link to={`/notes/${note.id}`}> {note.content}</Link>
                </TableCell>
                <TableCell>
                  <strong>{note.important ? "important" : ""}</strong>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Notes;
