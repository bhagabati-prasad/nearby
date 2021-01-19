import { useState, useEffect } from "react";
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
  SelectList,
  SubmitBtn,
} from "./PostElements";
import Axios from "axios";

const PostService = () => {
  const [navMenu, setNavMenu] = useState([]);
  const [serviceData, setServiceData] = useState({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    house: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) =>
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });

  // find category for submenu
  const subCategory = navMenu.find((nav) => nav.menu === serviceData.category);

  const handlePostService = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://localhost:4000/api/post/service", {
        ...serviceData,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getmenu = async () => {
      const res = await Axios.get("http://127.0.0.1:4000/api/navmenu");
      setNavMenu(res.data);
    };
    getmenu();
  }, []);

  return (
    <>
      {/* About your service section */}
      <AdHeading>
        <AdTitle>Post your service</AdTitle>
      </AdHeading>
      <FormSection>
        <form onSubmit={handlePostService}>
          <FormHeading>About your service</FormHeading>
          <FormRow>
            <Label htmlFor='title'>
              Company Name<Star>*</Star>
            </Label>
            <Input
              type='text'
              id='title'
              name='title'
              value={serviceData.title}
              onChange={handleChange}
              required
            />
          </FormRow>
          <FormRow>
            <Label htmlFor='description'>
              Description<Star>*</Star>
            </Label>
            <Textarea
              id='description'
              name='description'
              value={serviceData.description}
              onChange={handleChange}
              required
            ></Textarea>
          </FormRow>
          <SplitRow>
            <FormRow>
              <Label htmlFor='category'>
                Category<Star>*</Star>
              </Label>
              <SelectList
                id='category'
                name='category'
                onChange={handleChange}
                required
              >
                <option value=''>Select Category</option>
                {navMenu.map((nav, indx) =>
                  nav.menu ? (
                    <option key={indx} value={nav.menu}>
                      {nav.menu}
                    </option>
                  ) : null
                )}
              </SelectList>
            </FormRow>
            <FormRow>
              {subCategory && subCategory.submenu.length > 0 ? (
                <>
                  <Label htmlFor='subcategory'>
                    Sub Category<Star>*</Star>
                  </Label>
                  <SelectList
                    id='subcategory'
                    name='subcategory'
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select Category</option>
                    {subCategory.submenu.map((menu, indx) => (
                      <option key={indx} value={menu.title}>
                        {menu.title}
                      </option>
                    ))}
                  </SelectList>
                </>
              ) : null}
            </FormRow>
          </SplitRow>
          {/* Address section */}
          <FormHeading>Address</FormHeading>
          <SplitRow>
            <FormRow>
              <Label htmlFor='house'>Plot no</Label>
              <Input
                type='text'
                id='house'
                name='house'
                value={serviceData.house}
                onChange={handleChange}
              />
            </FormRow>
            <FormRow>
              <Label htmlFor='street'>
                Street<Star>*</Star>
              </Label>
              <Input
                type='text'
                id='street'
                name='street'
                value={serviceData.street}
                onChange={handleChange}
                required
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
                value={serviceData.area}
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
                value={serviceData.city}
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
                value={serviceData.state}
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
                value={serviceData.pincode}
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

export default PostService;
