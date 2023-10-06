import { SyntheticEvent, useEffect, useState } from 'react';
import axios from "axios"
 
interface Note {
  id: number,
  content: string
    }
const App = () => {
    const [newNote, setNewNote] = useState('');
    const [notes, setNotes] = useState<Note[]>([]);
    useEffect(() => {
        axios.get < Note[]>("http://localhost:3001/notes").then((result) => {
            setNotes(result.data)
        })
    },[])
    
    const handleSubmit = (event:SyntheticEvent) => {
        event.preventDefault();
        axios.post<Note>("http://localhost:3001/notes", {content:newNote}).then((result) => {
            setNotes([...notes,result.data])
        })
       
        setNewNote("")
    }

    return (
        <>
        {notes.map((val) => <div>
            {val.content}
        </div>)}
            <form onSubmit={handleSubmit}>
                <input type='text' value={newNote} onChange={(event)=>{setNewNote(event.target.value)}}/>
            </form>
            <button> Add</button>
    </>
     )
}
export default App;