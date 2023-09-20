import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
// import { TextField,Button } from "@mui/material";
import { Button,Input} from "./components/Button";
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(event.target.username.value);
    navigate("/");
  };
  return (
    <>
      <h2 style={{ color: "green" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <div>
            <Input label="username" name="username" placeholder="username" />
          </div>

          <div>
            <Input label="password" type="password" placeholder="password" />
          </div>

          <div>
            <Button type="submit">
              login
            </Button>
          </div>
        </Form.Group>
      </form>
    </>
  );
};
export default Login;
