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
  SubmitBtn,
} from './PostElements';
import Axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { ItemContext } from '../Context/ItemContext';

const PostRent = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { setUpdate } = useContext(ItemContext);
  const [rentData, setRentData] = useState({
    title: '',
    type: '',
    status: '',
    bedrooms: '',
    bathrooms: '',
    description: '',
    price: '',
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
    setRentData({ ...rentData, [e.target.name]: e.target.value });

  const handlePostRent = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post(
        'http://localhost:4000/api/post/rent',
        {
          ...rentData,
          images,
          name: `${user.userData.firstName} ${user.userData.lastName}`,
          phone: user.userData.phone,
          email: user.userData.email,
        },
        {
          headers: { 'user-id': user.userData._id },
        }
      );
      if (res.data) {
        console.log(res.data);
        setUpdate((prev) => !prev);
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setRentData({
      ...rentData,
      house: user ? user?.userData?.address?.house : '',
      street: user ? user?.userData?.address?.state : '',
      area: user ? user?.userData?.address?.area : '',
      city: user ? user?.userData?.address?.city : '',
      state: user ? user?.userData?.address?.state : '',
      pincode: user ? user?.userData?.address?.pincode : '',
    });
  }, [user]);

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
              Property Title<Star>*</Star>
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
          <SplitRow>
            <FormRow>
              <Label>
                Property Type<Star>*</Star>
              </Label>
              <select
                name='type'
                onChange={handleChange}
                className='form-control'
              >
                <option value=''>Select</option>
                <option value='house'>House</option>
                <option value='appartment'>Appartment</option>
              </select>
            </FormRow>
            <FormRow>
              <Label>
                Property Status<Star>*</Star>
              </Label>
              <select
                name='status'
                onChange={handleChange}
                className='form-control'
              >
                <option value=''>Select</option>
                <option value='rent'>Rent</option>
                <option value='sell'>Sell</option>
              </select>
            </FormRow>
            <FormRow>
              <Label htmlFor='bedrooms'>
                Bedrooms<Star>*</Star>
              </Label>
              <Input
                type='number'
                min={1}
                id='bedrooms'
                name='bedrooms'
                value={rentData.bedrooms}
                onChange={handleChange}
                required
              />
            </FormRow>
            <FormRow>
              <Label htmlFor='bathrooms'>
                Bathrooms<Star>*</Star>
              </Label>
              <Input
                type='number'
                min={0}
                id='bathrooms'
                name='bathrooms'
                value={rentData.bathrooms}
                onChange={handleChange}
                required
              />
            </FormRow>
          </SplitRow>
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
          <SplitRow>
            <FormRow>
              <Label htmlFor='price'>
                Rent Price<Star>*</Star>
              </Label>
              <Input
                style={{ width: '70%' }}
                type='number'
                min={0}
                id='price'
                name='price'
                value={rentData.price}
                onChange={handleChange}
                required
              />
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
          </SplitRow>
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
