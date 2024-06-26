import { useState, useContext } from "react";
import Axios from "axios";
import {
  Center,
  FormContainer,
  LeftImgDiv,
  FormDiv,
  FormField,
  Input,
} from "./regElements";
import LoginBg from "../../image/write-note.jpg";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const history = useHistory();
  // set user from context
  const { setUser } = useContext(UserContext);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;

  const handleChange = (e) =>
    setLogin({ ...login, [e.target.name]: e.target.value });

  Axios.defaults.withCredentials = true;
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://localhost:4000/api/login", {
        ...login,
      });
      console.log(res);
      if (res.status === 200) {
        setUser({ ...res.data });
        localStorage.setItem("auth-token", res.data.token);
        history.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Center>
        <FormContainer>
          <LeftImgDiv bg={LoginBg} />
          <FormDiv>
            <h2>Login</h2>
            <br />
            <form onSubmit={handleLogin}>
              <FormField>
                <label htmlFor='email'>Email</label>
                <Input
                  type='text'
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  required
                />
              </FormField>
              <FormField style={{ margin: "2rem 0" }}>
                <label htmlFor='password'>Password</label>
                <Input
                  type='password'
                  id='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  required
                />
              </FormField>
              <FormField>
                <button type='submit'>Login</button>
              </FormField>
            </form>
            <p style={{ fontSize: "1.45rem" }}>
              Don't have an account? <Link to='/signup'>Sign up</Link>
            </p>
          </FormDiv>
        </FormContainer>
      </Center>
    </>
  );
};

export default Login;
