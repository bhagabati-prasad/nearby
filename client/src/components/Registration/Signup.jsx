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
import { Link, useHistory } from "react-router-dom";
import SignupBg from "../../image/writing.jpg";
import { UserContext } from "../Context/UserContext";

const Signup = () => {
  const history = useHistory();
  // set user from context
  const { setUser } = useContext(UserContext);
  const [term, setTerm] = useState(false);
  const [signup, setSignup] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    conPassword: "",
  });
  const [errors, setErrors] = useState({
    fnameErr: "",
    lnameErr: "",
    emailErr: "",
    phoneErr: "",
    passwordErr: "",
    conPasswordErr: "",
    termErr: "",
  });

  const { fname, lname, email, phone, password, conPassword } = signup;
  const {
    fnameErr,
    lnameErr,
    emailErr,
    phoneErr,
    passwordErr,
    conPasswordErr,
    termErr,
  } = errors;

  const handleChange = (e) =>
    setSignup({ ...signup, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (term) {
        if (password === conPassword) {
          Axios.defaults.withCredentials = true;
          const res = await Axios.post("http://localhost:4000/api/signup", {
            ...signup,
          });
          console.log(res);
          setUser({ ...res.data });
          localStorage.setItem("auth-token", res.data.token);
          history.push("/");
        } else {
          setErrors({ ...errors, conPasswordErr: "Password didn't matched." });
        }
      } else {
        setErrors({ ...errors, termErr: "Accept T&C." });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Center>
        <FormContainer>
          <LeftImgDiv bg={SignupBg} />
          <RightFormDiv>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
              <div className='d-flex flex-column flex-md-column flex-lg-row'>
                <FormField half>
                  <label htmlFor='fname'>First name</label>
                  <Input
                    type='text'
                    id='fname'
                    name='fname'
                    value={fname}
                    onChange={handleChange}
                    required
                  />
                  {fnameErr && <p>{fnameErr}</p>}
                </FormField>
                <FormField>
                  <label htmlFor='lname'>Last name</label>
                  <Input
                    type='text'
                    id='lname'
                    name='lname'
                    value={lname}
                    onChange={handleChange}
                    required
                  />
                  {lnameErr && <p>{lnameErr}</p>}
                </FormField>
              </div>
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
                {emailErr && <p>{emailErr}</p>}
              </FormField>
              <FormField>
                <label htmlFor='phone'>Phone</label>
                <Input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={phone}
                  onChange={handleChange}
                  required
                />
                {phoneErr && <p>{phoneErr}</p>}
              </FormField>
              <FormField>
                <label htmlFor='password'>Password</label>
                <Input
                  type='text'
                  id='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  required
                />
                {passwordErr && <p>{passwordErr}</p>}
              </FormField>
              <FormField>
                <label htmlFor='conPassword'>Confirm password</label>
                <Input
                  type='text'
                  id='conPassword'
                  name='conPassword'
                  value={conPassword}
                  onChange={handleChange}
                  required
                />
                {conPasswordErr && <p>{conPasswordErr}</p>}
              </FormField>
              <FormField>
                <div className='d-flex align-items-center my-2'>
                  <input
                    type='checkbox'
                    id='check'
                    defaultChecked={term}
                    onClick={() => setTerm(!term)}
                    required
                  />
                  <label htmlFor='check' className='ml-2'>
                    Accept our T&C. {termErr && <p>{termErr}</p>}
                  </label>
                </div>
              </FormField>
              <FormField>
                <button type='submit'>Signup</button>
              </FormField>
            </form>
            <p style={{ fontSize: "1.45rem" }}>
              Already have an account? <Link to='/login'>Log in</Link>
            </p>
          </RightFormDiv>
        </FormContainer>
      </Center>
    </>
  );
};

export default Signup;
