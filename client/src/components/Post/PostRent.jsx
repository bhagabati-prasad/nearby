import { useState } from "react";
import {
  AdHeading,
  AdTitle,
  FormSection,
  FormHeading,
  SplitRow,
  FormRow,
  Star,
  Label,
  Input,
  Textarea,
  SubmitBtn,
} from "./PostElements";
import Axios from "axios";

const PostRent = () => {
  const [rentData, setRentData] = useState({
    title: "",
    description: "",
    price: "",
    house: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) =>
    setRentData({ ...rentData, [e.target.name]: e.target.value });

  const handlePostRent = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://localhost:4000/api/post/rent", {
        ...rentData,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AdHeading>
        <AdTitle>Post your rent</AdTitle>
      </AdHeading>
      <FormSection>
        <form onSubmit={handlePostRent}>
          <FormHeading>About your ad</FormHeading>
          <FormRow>
            <Label htmlFor='title'>
              Ad Title<Star>*</Star>
            </Label>
            <Input
              type='text'
              id='title'
              name='title'
              value={rentData.title}
              onChange={handleChange}
              required
            />
          </FormRow>
          <FormRow>
            <Label htmlFor='desc'>
              Description<Star>*</Star>
            </Label>
            <Textarea
              id='desc'
              name='description'
              value={rentData.description}
              onChange={handleChange}
              required
            ></Textarea>
          </FormRow>
          <FormRow>
            <Label htmlFor='price'>
              Rent Price<Star>*</Star>
            </Label>
            <Input
              style={{ width: "30%" }}
              type='tel'
              id='price'
              name='price'
              value={rentData.price}
              onChange={handleChange}
              required
            />
          </FormRow>
          <FormHeading>Address</FormHeading>
          <SplitRow>
            <FormRow>
              <Label htmlFor='house'>
                House no<Star>*</Star>
              </Label>
              <Input
                type='text'
                id='house'
                name='house'
                value={rentData.house}
                onChange={handleChange}
                required
              />
            </FormRow>
            <FormRow>
              <Label htmlFor='street'>Street</Label>
              <Input
                type='text'
                id='street'
                name='street'
                value={rentData.street}
                onChange={handleChange}
              />
            </FormRow>
          </SplitRow>
          <SplitRow>
            <FormRow>
              <Label htmlFor='area'>
                Area<Star>*</Star>
              </Label>
              <Input
                type='text'
                id='area'
                name='area'
                value={rentData.area}
                onChange={handleChange}
                required
              />
            </FormRow>
            <FormRow>
              <Label htmlFor='city'>
                City<Star>*</Star>
              </Label>
              <Input
                type='text'
                id='city'
                name='city'
                value={rentData.city}
                onChange={handleChange}
                required
              />
            </FormRow>
          </SplitRow>
          <SplitRow>
            <FormRow>
              <Label htmlFor='state'>
                State<Star>*</Star>
              </Label>
              <Input
                type='text'
                id='state'
                name='state'
                value={rentData.state}
                onChange={handleChange}
                required
              />
            </FormRow>
            <FormRow>
              <Label htmlFor='pincode'>
                Pincode<Star>*</Star>
              </Label>
              <Input
                type='text'
                id='pincode'
                name='pincode'
                value={rentData.pincode}
                onChange={handleChange}
                required
              />
            </FormRow>
          </SplitRow>
          <FormRow>
            <SubmitBtn type='submit'>Submit</SubmitBtn>
          </FormRow>
        </form>
      </FormSection>
    </>
  );
};

export default PostRent;
