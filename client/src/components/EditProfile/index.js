import { useContext } from "react";
import styled from "styled-components";
import UpdatePicture from "./UpdatePicture";
import UpdateInfo from "./UpdateInfo";

const Container = styled.section`
  background: #fff;
  padding: 1.4rem;
  margin: 1.2rem 0;
`;

const EditProfile = () => {
  return (
    <>
      <Container>
        <div style={{ width: "60%", margin: "0 auto" }}>
          <UpdatePicture />
          <hr />
          <UpdateInfo />
        </div>
      </Container>
    </>
  );
};

export default EditProfile;
