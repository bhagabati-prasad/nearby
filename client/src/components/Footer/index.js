import styled from "styled-components";
import { Row } from "react-bootstrap";

const FooterSection = styled.footer`
  background: #fff;
  color: #222;
  font-size: 1.5rem;
  padding: 2rem;
  text-align: center;
  p {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <>
      <Row>
        <FooterSection>
          <p>
            Copyright &copy; {new Date().getFullYear()} Nearby. All rights
            reserved.
          </p>
        </FooterSection>
      </Row>
    </>
  );
};

export default Footer;
