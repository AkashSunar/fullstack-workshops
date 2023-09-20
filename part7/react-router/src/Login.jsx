import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { TextField,Button } from "@mui/material";
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(event.target.username.value);
    navigate("/");
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <div>
            <TextField label="username" name="username" />
          </div>

          <div>
            <TextField label="password" type="password" />
          </div>

          <div>
            <Button variant="contained" color="primary" type="submit">
              login
            </Button>
          </div>
        </Form.Group>
      </form>
    </>
  );
};
export default Login;
