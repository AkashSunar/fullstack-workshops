import axios from "axios";
let baseUrl = "/api/login";
const login = async (user) => {
    let loggedinUser = await axios.post(baseUrl, user);
    return loggedinUser.data;
//   return axios.post(baseUrl,user).then((myResult) => myResult.data);
};

export default { login };
