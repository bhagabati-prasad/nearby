import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
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
} from './PostElements';
import Axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { NavMenuContext } from '../Context/NavMenuContext';
import { ItemContext } from '../Context/ItemContext';

const PostService = () => {
  const history = useHistory();
  // const { navMenu } = useContext(NavMenuContext);
  const { user } = useContext(UserContext);
  const { setUpdate } = useContext(ItemContext);
  const navMenu = [
    'store',
    'hospital',
    'food',
    'gas-station',
    'garage',
    'mall',
    'beauty',
    'institute',
    'entertainment',
  ];
  const [serviceData, setServiceData] = useState({
    title: '',
    description: '',
    category: '',
    subcategory: '',
    house: '',
    street: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [images, setImages] = useState([]);
  const handleImageChange = (e) => {
    const files = e.target.files;
    let imgs = [];
    for (let i of files) {
      imgs.push(i.name);
    }
    setImages(imgs);
  };

  const handleChange = (e) =>
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });

  // find category for submenu
  // const subCategory =
  // navMenu && navMenu.find((nav) => nav.menu === serviceData.category);

  const handlePostService = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post(
        'http://localhost:4000/api/post/service',
        {
          ...serviceData,
          name: `${user.userData.firstName} ${user.userData.lastName}`,
          phone: user.userData.phone,
          email: user.userData.email,
          images,
        },
        {
          headers: { 'user-id': user.userData._id },
        }
      );
      if (res.data) {
        setUpdate((prev) => !prev);
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setServiceData({
      ...serviceData,
      house: user ? user?.userData?.address?.house : '',
      street: user ? user?.userData?.address?.street : '',
      area: user ? user?.userData?.address?.area : '',
      city: user ? user?.userData?.address?.city : '',
      state: user ? user?.userData?.address?.state : '',
      pincode: user ? user?.userData?.address?.pincode : '',
    });
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
                {navMenu &&
                  navMenu.map(
                    (nav, indx) =>
                      nav && (
                        <option
                          key={indx}
                          value={nav}
                          className='text-capitalize'
                        >
                          {nav}
                        </option>
                      )
                  )}
              </SelectList>
            </FormRow>
            <FormRow>
              <Label>Image</Label>
              <Input
                type='file'
                name='images'
                onChange={handleImageChange}
                accept='image/*'
                multiple
              />
            </FormRow>
            <FormRow>
              {/* {subCategory &&
              subCategory?.submenu &&
              subCategory?.submenu.length > 0 ? (
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
              ) : null} */}
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
