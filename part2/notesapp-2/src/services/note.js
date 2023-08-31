import axios from "axios";
let baseUrl = "/api/notes";
const getAll = () => {
  return axios.get(baseUrl).then((myResult) => myResult.data);
};
const create = (note,token) => {
  return axios.post(baseUrl, note, {
    headers: { Authorization: `Bearer ${token}`},
  });
};
const update = (id, updatedNote) => {
  return axios.put(`${baseUrl}/${id}`, updatedNote);
};
export default { getAll, create, update };
