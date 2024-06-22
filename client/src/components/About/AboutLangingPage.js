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
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`;

const BgImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

const AboutUs = styled.h1`
  font-size: 4.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #1e90ff;
  position: relative;
`;

const AboutSubText = styled.h2`
  font-size: 2.2rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  margin: 1.8rem 0;
  line-height: 1.3;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const AboutLangingPage = () => {
  return (
    <>
      <LandingRow>
        <div style={{ maxWidth: "600px" }}>
          <BgImage src={AboutBg} />
          <AboutUs>About Us</AboutUs>
          <AboutSubText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsa
            reprehenderit eum consectetur delectus animi corporis ab, quae ullam
            repellat error culpa.
          </AboutSubText>
        </div>
      </LandingRow>
    </>
  );
};

export default AboutLangingPage;
