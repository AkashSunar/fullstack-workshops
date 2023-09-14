import axios from "axios";
const baseUrl = "http://localhost:3001/notes";
export const getNotes = () =>
  axios.get(baseUrl).then((res) => {
    return res.data;
  });

export const createNote =async (newNote) => {
   const response=await axios.post(baseUrl, newNote)
    return response.data
};

export const updateNote = (updatedNote) =>
  axios
    .put(`${baseUrl}/${updatedNote.id}`, updatedNote)
    .then((res) => res.data);
