import { useState, useContext } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { Heading } from './UpdateInfo';

const ProfilePicDiv = styled.div`
  display: flex;
  height: 15rem;
  width: 15rem;
  background-color: #fff;
  border-radius: 50%;
  margin: 2rem 0;
  margin-right: 3rem;
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    z-index: 1;
  }
`;
const ProfileImg = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const Initials = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 6rem;
  font-weight: 300;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 0 0 4px #777;
`;

const Label = styled.label`
  font-size: 1.6rem;
  color: #111;
  cursor: pointer;
  transition: color 0.24s;
  &:hover {
    color: #666;
  }
`;
const Input = styled.input`
  display: none;
`;
const Button = styled.button`
  height: 3.4rem;
  width: 7.5rem;
  display: grid;
  place-items: center;
  margin: 1rem;
  margin-left: 0;
  outline: none;
  color: #222;
  font-size: 1.5rem;
  border: 1.4px solid #444;
  background: #fff;
  border-radius: 4px;
  transition: all 0.24s;
  &:hover {
    color: #fff;
    background: #444;
  }
`;

const DeletePicture = styled.p`
  font-size: 1.6rem;
  color: #f00;
  cursor: pointer;
  transition: color 0.24s;
  &:hover {
    color: #e21f1f;
  }
`;

const UpdatePicture = () => {
  const { user, setUser } = useContext(UserContext);
  const [profilePicture, setProfilePicture] = useState('');
  const [previewSource, setPreviewSource] = useState();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitPicture = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
    setPreviewSource();
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const res = await Axios.patch(
        `http://localhost:4000/api/user/update/picture/${user?.userData?._id}`,
        {
          image: base64EncodedImage,
        }
      );
      if (res.data)
        setUser({
          isLoggedIn: res.data.isLoggedIn,
          userData: res.data.user,
          token: undefined,
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePicture = async () => {
    const deleteRes = await Axios.delete(
      `http://localhost:4000/api/user/delete/picture/${user?.userData?._id}`
    );
    if (deleteRes.data)
      setUser({
        isLoggedIn: deleteRes.data.isLoggedIn,
        userData: deleteRes.data.user,
        token: undefined,
      });
  };

  return (
    <>
      <Heading>Update Profile Picture</Heading>
      <hr />
      <ProfilePicDiv>
        {user?.userData?.avatar ? (
          <ProfileImg src={user?.userData?.avatar} />
        ) : (
          <Initials>{user?.userData?.firstName.slice(0, 1)}</Initials>
        )}
      </ProfilePicDiv>
      {previewSource && (
        <ProfilePicDiv>
          <ProfileImg src={previewSource} alt='new picture' />
        </ProfilePicDiv>
      )}
      <form onSubmit={handleSubmitPicture}>
        {previewSource ? (
          <h2
            className='text-danger'
            style={{ cursor: 'pointer' }}
            onClick={() => setPreviewSource()}
          >
            Cancel this picture
          </h2>
        ) : (
          <Label htmlFor='upload_pic'>Chose a new picture</Label>
        )}
        <Input
          type='file'
          id='upload_pic'
          name='image'
          onChange={handleFileInputChange}
          value={profilePicture}
          accept='image/*'
        />
        <Button type='submit'>Upload</Button>
      </form>
      <DeletePicture onClick={handleDeletePicture}>
        Remove profile picture
      </DeletePicture>
    </>
  );
};

export default UpdatePicture;
