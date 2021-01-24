import styled from "styled-components";
import { Link } from "react-router-dom";
import userPic from "../../image/user.jpg";

// Profile Pic section - Left
const ProfilePicContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
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
  font-size: 2.4rem;
  font-weight: 400;
  font-family: sans-serif;
  letter-spacing: 0.6px;
`;
const UserInfo = styled.p`
  color: #555;
  font-size: 1.7rem;
  line-height: 3rem;
`;

const Title = styled.span`
  text-transform: capitalize;
  font-size: 17px;
  line-height: 20px;
  color: #444;
  margin-right: 1rem;
`;
const Value = styled(Title)`
  padding: 4px 7px;
  color: #111;
  background-color: #eee;
  border-radius: 4px;
`;

const ProfileInfo = ({ userInfo, path }) => {
  return (
    <>
      <div className='d-flex bg-white rounded shadow-sm p-5'>
        <ProfilePicContainer>
          <ProfilePicDiv>
            <ProfileImg src={userPic} alt='profile pic' />
          </ProfilePicDiv>
          <EditProfileBtn to={`${path}/edit`}>Edit Profile</EditProfileBtn>
        </ProfilePicContainer>
        <UserInfoDiv>
          <UserName>
            {userInfo && userInfo.firstName} {userInfo && userInfo.lastName}
          </UserName>
          <UserInfo>{userInfo && userInfo.email}</UserInfo>
          <UserInfo>{userInfo && `${userInfo.phone}`}</UserInfo>
          <hr />
          <h1>Address</h1>
          {userInfo &&
            Object.keys(userInfo.address).map((user, indx) => (
              <div key={indx} style={{ margin: "1.2rem 0" }}>
                <Title>{user}:</Title>
                <Value>{userInfo.address[user]}</Value>
              </div>
            ))}
        </UserInfoDiv>
      </div>
    </>
  );
};

export default ProfileInfo;
