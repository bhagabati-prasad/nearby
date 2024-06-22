import { useState, useContext } from "react";
import Axios from "axios";
import {
  Center,
  FormContainer,
  FormDiv,
  FormField,
  Input,
} from "./regElements";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Signup = () => {
  const history = useHistory();
  // set user from context
  const { setUser } = useContext(UserContext);
  const [term, setTerm] = useState(false);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    altPhone: "",
    password: "",
    conPassword: "",
  });
  const [address, setAddress] = useState({
    house: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
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

  const {
    fnameErr,
    lnameErr,
    emailErr,
    passwordErr,
    conPasswordErr,
    termErr,
  } = errors;

  const handleChangeInfo = (e) =>
    setInfo({ ...info, [e.target.name]: e.target.value });
  const handleChangeAddress = (e) =>
    setAddress({ ...address, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (term) {
        if (info.password === info.conPassword) {
          Axios.defaults.withCredentials = true;
          const res = await Axios.post("http://localhost:4000/api/signup", {
            info,
            address,
          });
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
        <form onSubmit={handleSignup}>
          <FormContainer>
            <FormDiv>
              <h2>Signup</h2>
              <div className='d-flex flex-column flex-md-column flex-lg-row'>
                <FormField half>
                  <label htmlFor='firstName'>First name</label>
                  <Input
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={info.firstName}
                    onChange={handleChangeInfo}
                    required
                  />
                  {fnameErr && <p>{fnameErr}</p>}
                </FormField>
                <FormField>
                  <label htmlFor='lastName'>Last name</label>
                  <Input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={info.lastName}
                    onChange={handleChangeInfo}
                    required
                  />
                  {lnameErr && <p>{lnameErr}</p>}
                </FormField>
              </div>
              <FormField>
                <label htmlFor='email'>Email</label>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  value={info.email}
                  onChange={handleChangeInfo}
                  required
                />
                {emailErr && <p>{emailErr}</p>}
              </FormField>
              <div className='d-flex flex-column flex-md-column flex-lg-row'>
                <FormField half>
                  <label htmlFor='phone'>Phone</label>
                  <Input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={info.phone}
                    onChange={handleChangeInfo}
                    required
                  />
                </FormField>
                <FormField>
                  <label htmlFor='altPhone'>Alternate Phone</label>
                  <Input
                    type='tel'
                    id='altPhone'
                    name='altPhone'
                    value={info.altPhone}
                    onChange={handleChangeInfo}
                    required
                  />
                </FormField>
              </div>
              <FormField>
                <label htmlFor='password'>Password</label>
                <Input
                  type='password'
                  id='password'
                  name='password'
                  value={info.password}
                  onChange={handleChangeInfo}
                  required
                />
                {passwordErr && <p>{passwordErr}</p>}
              </FormField>
              <FormField>
                <label htmlFor='conPassword'>Confirm password</label>
                <Input
                  type='password'
                  id='conPassword'
                  name='conPassword'
                  value={info.conPassword}
                  onChange={handleChangeInfo}
                  required
                />
                {conPasswordErr && <p>{conPasswordErr}</p>}
              </FormField>
            </FormDiv>

            {/* Address Fields */}
            <FormDiv>
              <h1>Your Current Address</h1>
              <div className='d-flex flex-column flex-md-column flex-lg-row'>
                <FormField half>
                  <label htmlFor='house'>House Number</label>
                  <Input
                    type='text'
                    id='house'
                    name='house'
                    value={address.house}
                    onChange={handleChangeAddress}
                    required
                  />
                </FormField>
                <FormField>
                  <label htmlFor='street'>Street</label>
                  <Input
                    type='text'
                    id='street'
                    name='street'
                    value={address.street}
                    onChange={handleChangeAddress}
                    required
                  />
                </FormField>
              </div>
              <div className='d-flex flex-column flex-md-column flex-lg-row'>
                <FormField half>
                  <label htmlFor='area'>Area</label>
                  <Input
                    type='text'
                    id='area'
                    name='area'
                    value={address.area}
                    onChange={handleChangeAddress}
                    required
                  />
                </FormField>
                <FormField>
                  <label htmlFor='city'>City</label>
                  <Input
                    type='text'
                    id='city'
                    name='city'
                    value={address.city}
                    onChange={handleChangeAddress}
                    required
                  />
                </FormField>
              </div>
              <div className='d-flex flex-column flex-md-column flex-lg-row'>
                <FormField half>
                  <label htmlFor='state'>State</label>
                  <Input
                    type='text'
                    id='state'
                    name='state'
                    value={address.state}
                    onChange={handleChangeAddress}
                    required
                  />
                </FormField>
                <FormField>
                  <label htmlFor='pincode'>Pincode</label>
                  <Input
                    type='tel'
                    id='pincode'
                    name='pincode'
                    value={address.pincode}
                    onChange={handleChangeAddress}
                    required
                  />
                </FormField>
              </div>
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
              <p style={{ fontSize: "1.45rem" }}>
                Already have an account? <Link to='/login'>Log in</Link>
              </p>
            </FormDiv>
          </FormContainer>
        </form>
      </Center>
    </>
  );
};

export default Signup;
