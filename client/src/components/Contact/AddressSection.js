import { Col } from "react-bootstrap";
import styled from "styled-components";
import { FormContainer, ContactHeading } from "./FormSection";

import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const AddressContainer = styled(FormContainer)`
  padding-top: 3rem;
`;

const Addressheading = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #777;
  font-size: 1.4rem;
  font-weight: 600;
  padding-left: 0.7rem;
  border-left: 3px solid #999;
  margin: 2.2rem 0 1.4rem;
`;

const ContactRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 1.8rem 0;
`;

const ContactIcon = styled.span`
  min-height: 3.4rem;
  min-width: 3.4rem;
  display: grid;
  place-items: center;
  background: #666;
  color: #fff;
  font-size: 1.6rem;
  border-radius: 2px;
  margin-right: 1.4rem;
`;

const ContactAddress = styled.p`
  font-size: 1.57rem;
  letter-spacing: 0.6px;
  color: #444;
  font-family: "Roboto", sans-serif;
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
`;

const SocialIcon = styled.span`
  font-size: 1.8rem;
  margin-right: 1rem;
`;

export default function AddressSection() {
  return (
    <>
      <Col md={4} sm={6} xs={12}>
        <AddressContainer>
          <ContactHeading>Get in Touch</ContactHeading>
          <p style={{ fontSize: "1.5rem", color: "#444" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            incidunt tenetur.
          </p>
          <div>
            <Addressheading>React us through</Addressheading>
            <ContactRow>
              <ContactIcon>
                <FaPhoneAlt />
              </ContactIcon>
              <ContactAddress>+91 135 925 8205</ContactAddress>
            </ContactRow>
            <ContactRow>
              <ContactIcon>
                <IoMdMail />
              </ContactIcon>
              <ContactAddress>johndoe@ebc.com</ContactAddress>
            </ContactRow>
            <ContactRow>
              <ContactIcon>
                <MdLocationOn />
              </ContactIcon>
              <ContactAddress>
                Machha Market, Hata Sahi, Las Angeles, California, USA
              </ContactAddress>
            </ContactRow>
          </div>
          <div>
            <Addressheading>Stay connected on</Addressheading>
            <SocialRow>
              <SocialIcon>
                <FaFacebook />
              </SocialIcon>
              <ContactAddress>John Doe</ContactAddress>
            </SocialRow>
            <SocialRow>
              <SocialIcon>
                <FaTwitter />
              </SocialIcon>
              <ContactAddress>john_doe</ContactAddress>
            </SocialRow>
            <SocialRow>
              <SocialIcon>
                <FaInstagram />
              </SocialIcon>
              <ContactAddress>__john_doe__</ContactAddress>
            </SocialRow>
          </div>
        </AddressContainer>
      </Col>
    </>
  );
}
