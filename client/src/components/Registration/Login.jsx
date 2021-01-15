import { useState, useContext } from "react";
import Axios from "axios";
import {
  Center,
  FormContainer,
  LeftImgDiv,
  RightFormDiv,
  FormField,
  Input,
} from "./regElements";
import LoginBg from "../../image/write-note.jpg";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Login = () => {
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
      setUser({ ...res.data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Center>
        <FormContainer>
          <LeftImgDiv bg={LoginBg} />
          <RightFormDiv>
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
                  type='text'
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
          </RightFormDiv>
        </FormContainer>
      </Center>
    </>
  );
};

export default Login;
