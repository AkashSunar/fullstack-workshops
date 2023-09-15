import { useNavigate } from "react-router-dom";
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(event.target.userName.value);
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="userName" />
      <button>Login</button>
    </form>
  );
};
export default Login;
