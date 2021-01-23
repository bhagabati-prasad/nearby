import { useState } from "react";
import styled from "styled-components";
import {
  SplitRow,
  FormRow,
  Label,
  Input,
  SubmitBtn,
} from "../Post/PostElements";

const Container = styled.section`
  background: #fff;
  padding: 1.4rem;
  margin: 1.2rem 0;
`;

const Heading = styled.h2`
  color: #555;
  position: relative;
  padding-bottom: 1rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    width: 4rem;
    background: #1e90ff;
    border-radius: 4rem;
  }
`;

const EditProfile = () => {
  const [profile, setProfile] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    house: "",
    steet: "",
    area: "",
    city: "",
    pincode: "",
  });
  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  return (
    <>
      <Container>
        <h1>Edit Profile</h1>
        <Heading>Change Image</Heading>
        <hr />
        <Heading>Edit your info</Heading>
        <FormRow>
          <Label htmlFor='fname'>First Name</Label>
          <Input
            type='text'
            id='fname'
            name='fname'
            value={profile.fname}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='lname'>Last Name</Label>
          <Input
            type='text'
            id='lname'
            name='lname'
            value={profile.lname}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='lname'>Last Name</Label>
          <Input
            type='text'
            id='lname'
            name='lname'
            value={profile.lname}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='text'
            id='email'
            name='email'
            value={profile.email}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='phone'>Phone</Label>
          <Input
            type='text'
            id='phone'
            name='phone'
            value={profile.phone}
            onChange={handleChange}
          />
        </FormRow>
        <Heading>Address</Heading>
        <FormRow>
          <Label htmlFor='house'>House No</Label>
          <Input
            type='text'
            id='house'
            name='house'
            value={profile.house}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='street'>Street</Label>
          <Input
            type='text'
            id='street'
            name='street'
            value={profile.street}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='area'>Area</Label>
          <Input
            type='text'
            id='area'
            name='area'
            value={profile.area}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='city'>City</Label>
          <Input
            type='text'
            id='city'
            name='city'
            value={profile.city}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor='pincode'>Pincode</Label>
          <Input
            type='text'
            id='pincode'
            name='pincode'
            value={profile.pincode}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow>
          <SubmitBtn type='submit'>Update Info</SubmitBtn>
        </FormRow>
      </Container>
    </>
  );
};

export default EditProfile;
