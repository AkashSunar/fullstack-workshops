import axios from "axios";
let baseUrl = "http://localhost:3001/notes";
const getAll = () => {
    return axios.get(baseUrl).then((myResult)=>myResult.data)
}
const create = (note) => {
    return axios.post(baseUrl,note)
}
const update = (id, updatedNote) => {
    return axios.put(`${baseUrl}/${id}`, updatedNote);
}
export default { getAll, create, update };
