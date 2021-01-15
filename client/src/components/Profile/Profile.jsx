import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import userPic from "../../image/user.jpg";

// Profile Pic section - Left
const ProfilePicContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfilePicDiv = styled.div`
  height: 15.3rem;
  width: 15.3rem;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
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
  left: 0;
  top: 0;
`;
const EditProfileBtn = styled(Link)`
  height: 3.4rem;
  width: 12rem;
  display: grid;
  place-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 1.4rem;
  background-color: #333;
  border: 2px solid #fff;
  border-radius: 40px;
  margin-top: 2rem;
  transition: all 0.24s;
  &:hover {
    color: #222;
    background-color: transparent;
    border: 2px solid #1e90ff;
  }
`;

// User data section - Right
const UserInfoDiv = styled.div`
  flex-grow: 2;
  padding: 0.8rem 0;
`;
const UserName = styled.p`
  color: #666;
  font-size: 3rem;
  font-weight: 400;
  font-family: sans-serif;
  letter-spacing: 0.6px;
`;
const UserInfo = styled.p`
  color: #555;
  font-size: 1.7rem;
  line-height: 3rem;
`;
const Span = styled.span`
  margin-right: 0.6rem;
  /* display: block; */
`;

const ProfileInfo = () => {
  const currentUrl = useLocation();
  return (
    <>
      <div className='d-flex bg-white rounded shadow-sm p-5'>
        <ProfilePicContainer>
          <ProfilePicDiv>
            <ProfileImg src={userPic} alt='profile pic' />
          </ProfilePicDiv>
          <EditProfileBtn to={`${currentUrl.pathname}/edit`}>
            Edit Profile
          </EditProfileBtn>
        </ProfilePicContainer>
        <UserInfoDiv>
          <UserName>Aleph Naught</UserName>
          <UserInfo>aleph@email.com</UserInfo>
          <UserInfo>+91 123 456 7890</UserInfo>
          <hr />
          <UserInfo>
            <Span>D-107,</Span>
            <Span>H.B Colony,</Span>
            <Span>Khandagiri,</Span>
            <Span>Las Vegas,</Span>
            <Span>482910,</Span>
            <Span>USA</Span>
          </UserInfo>
        </UserInfoDiv>
      </div>
    </>
  );
};

export default ProfileInfo;
