import { Row } from "react-bootstrap";
import FormSection from "./FormSection";
import AddressSection from "./AddressSection";
import styled from "styled-components";
import ContactBg from "../../image/contactusbgfull.jpg";

const BgImage = styled.section`
  width: 100%;
  height: 50vh;
  background: url(${ContactBg});
  background-position: center;
  background-size: cover;
  display: grid;
  place-items: center;
  margin-top: 1rem;
`;

const BgText = styled.h1`
  font-size: 13rem;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.5);
  user-select: none;
`;

const Contact = () => {
  return (
    <>
      <Row>
        <BgImage>
          <BgText>Contact us</BgText>
        </BgImage>
      </Row>

      <Row>
        <FormSection />
        <AddressSection />
      </Row>

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4924.507254799495!2d85.78558298253947!3d20.264117671878175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7eb7d3606b9%3A0x667bf847e137b538!2sUdaygiri%20and%20Khandagiri%20Caves!5e0!3m2!1sen!2sin!4v1607410345412!5m2!1sen!2sin'
        height='250px'
        width='100%'
        aria-hidden='false'
        tabIndex='0'
        style={{
          margin: "2rem 0",
          border: "0",
          filter: "grayscale(100%)",
        }}
      ></iframe>
    </>
  );
};

export default Contact;
