import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";
import { UserContext } from "../Context/UserContext";

import {
  FormRow,
  SplitRow,
  Label,
  Input,
  SubmitBtn,
} from "../Post/PostElements";

export const Heading = styled.h2`
  color: #444;
  font: bold 1.7rem arial;
  text-transform: uppercase;
  margin: 1rem 0;
  position: relative;
`;

const InputField = styled(Input)`
  background-color: transparent;
  transition: all 0.24s;
  &:focus {
    background-color: #f9f9f9;
  }
`;
const DeleteAccount = styled.h2`
  color: #f00;
  font-size: 1.8rem;
  margin: 2.4rem 0;
  cursor: pointer;
`;

const UdateInfo = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    altPhone: "",
  });
  const [address, setAddress] = useState({
    house: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    setInfo({
      fname: user?.userData?.firstName,
      lname: user?.userData?.lastName,
      email: user?.userData?.email,
      phone: user?.userData?.phone,
      altPhone: user?.userData?.altPhone,
    });
    setAddress({
      house: user?.userData?.address?.house,
      street: user?.userData?.address?.street,
      area: user?.userData?.address?.area,
      city: user?.userData?.address?.city,
      state: user?.userData?.address?.state,
      pincode: user?.userData?.address?.pincode,
    });
  }, [user]);

  const handleChangeInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await Axios.patch(
      "http://localhost:4000/api/user/update/info",
      { info, address },
      {
        headers: { "user-id": user.userData._id },
      }
    );
    if (res.data) {
      setUser({
        isLoggedIn: res.data.isLoggedIn,
        userData: res.data.user,
        token: undefined,
      });
      history.push("/");
    }
  };

  const handleDeleteAccount = async () => {
    if (
      window.confirm("You can not recover this account again. Sur to delete?")
    ) {
      const res = await Axios.delete(
        `http://localhost:4000/api/user/delete/user/${user?.userData?._id}`
      );
      if (res.data.status) {
        localStorage.setItem("auth-token", "");
        setUser({
          isLoggedIn: res.data.isLoggedIn,
          userData: undefined,
          token: undefined,
        });
        history.push("/");
      }
    }
  };

  return (
    <>
      <Heading>Update Info</Heading>
      <form onSubmit={handleUpdate}>
        <SplitRow>
          <FormRow>
            <Label htmlFor='fname'>First name</Label>
            <InputField
              type='text'
              id='fname'
              name='fname'
              value={info.fname}
              onChange={handleChangeInfo}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor='lname'>Last name</Label>
            <InputField
              type='text'
              id='lname'
              name='lname'
              value={info.lname}
              onChange={handleChangeInfo}
            />
          </FormRow>
        </SplitRow>
        <FormRow>
          <Label htmlFor='email'>Email</Label>
          <InputField
            type='email'
            id='email'
            name='email'
            value={info.email}
            onChange={handleChangeInfo}
          />
        </FormRow>
        <SplitRow>
          <FormRow>
            <Label htmlFor='phone'>Phone number</Label>
            <InputField
              type='tel'
              id='phone'
              name='phone'
              value={info.phone}
              onChange={handleChangeInfo}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor='altphone'>Alternate number</Label>
            <InputField
              type='tel'
              id='altphone'
              name='altphone'
              value={info.altPhone}
              onChange={handleChangeInfo}
            />
          </FormRow>
        </SplitRow>
        <hr />
        <Heading>Update Address</Heading>
        <SplitRow>
          <FormRow>
            <Label htmlFor='house'>House no</Label>
            <InputField
              type='text'
              id='house'
              name='house'
              value={address.house}
              onChange={handleChangeAddress}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor='street'>Street</Label>
            <InputField
              type='text'
              id='street'
              name='street'
              value={address.street}
              onChange={handleChangeAddress}
            />
          </FormRow>
        </SplitRow>
        <SplitRow>
          <FormRow>
            <Label htmlFor='area'>Area</Label>
            <InputField
              type='text'
              id='area'
              name='area'
              value={address.area}
              onChange={handleChangeAddress}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor='city'>City</Label>
            <InputField
              type='tel'
              id='city'
              name='city'
              value={address.city}
              onChange={handleChangeAddress}
            />
          </FormRow>
        </SplitRow>
        <SplitRow>
          <FormRow>
            <Label htmlFor='state'>State</Label>
            <InputField
              type='text'
              id='state'
              name='state'
              value={address.state}
              onChange={handleChangeAddress}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor='pincode'>Pincode</Label>
            <InputField
              type='tel'
              id='pincode'
              name='pincode'
              value={address.pincode}
              onChange={handleChangeAddress}
            />
          </FormRow>
        </SplitRow>
        <FormRow>
          <SubmitBtn type='submit'>Update</SubmitBtn>
        </FormRow>
      </form>
      <DeleteAccount onClick={handleDeleteAccount}>
        Delete account permanently?
      </DeleteAccount>
    </>
  );
};

export default UdateInfo;
