import { Row } from "react-bootstrap";
import styled from "styled-components";
import AboutBg from "../../image/team.jpg";

const LandingRow = styled(Row)`
  margin-top: 1rem;
  margin-bottom: 3rem;
  color: #fff;
  height: 70vh;
  display: flex;
  align-items: center;
  padding: 0 7vw;
  position: relative;
`;

const BgImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(30%);
  z-index: -1;
`;

const AboutUs = styled.h1`
  font-size: 4.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #1e90ff;
`;

const AboutSubText = styled.h2`
  font-size: 3.6rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  margin: 1.8rem 0;
  line-height: 1.2;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`;

const AboutLangingPage = () => {
  return (
    <>
      <LandingRow>
        <div style={{ maxWidth: "600px" }}>
          <BgImage src={AboutBg} />
          <AboutUs>About Us</AboutUs>
          <AboutSubText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
            saepe!
          </AboutSubText>
        </div>
      </LandingRow>
      <h1>sfs</h1>
    </>
  );
};

export default AboutLangingPage;
