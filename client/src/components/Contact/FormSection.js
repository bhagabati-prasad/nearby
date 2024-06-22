import { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 2.4rem;
  background: #ffffffb5;
  border-radius: 1rem;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
  margin: 2rem 0;
`;

const SmallTagline = styled.p`
  opacity: 0.8;
  letter-spacing: 0.4px;
  font-size: 1.1rem;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  padding: 0.7rem 0;
`;

export const ContactHeading = styled.h2`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  color: #444;
  letter-spacing: 1px;
  padding-bottom: 1.1rem;
  position: relative;
  margin-bottom: 2.4rem;
  &::before {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 0;
    height: 2px;
    width: 4rem;
    background: #1e90ff;
  }
`;

const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.14rem 0;
`;

const Label = styled.label`
  color: #666;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  width: 25%;
`;

const InputField = styled.input`
  height: 4rem;
  padding: 0 1.4rem;
  outline: none;
  border: 1.4px solid #999;
  color: #555;
  font-size: 1.5rem;
  background: transparent;
  flex: 1;
  border-radius: 4px;
  transition: border 0.2s;
  &:hover {
    border: 1.4px solid #222;
  }
  &:focus {
    border: 1.4px solid #1e90ff;
  }
`;

const MessageField = styled.textarea`
  height: 13rem;
  max-height: 14rem;
  padding: 1rem 1.4rem;
  outline: none;
  border: 1.4px solid #999;
  color: #555;
  font-size: 1.5rem;
  background: transparent;
  flex: 1;
  border-radius: 4px;
  transition: border 0.2s;
  &:hover {
    border: 1.4px solid #222;
  }
  &:focus {
    border: 1.4px solid #1e90ff;
  }
`;

const SubmitBtn = styled.button`
  padding: 1.1rem 1.7rem;
  outline: none;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #fff;
  background: #333;
  margin-left: 25%;
  transition: all 0.24s;
  &:hover {
    color: #333;
    background: transparent;
    border: 1px solid #333;
  }
`;

export default function FormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = form;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = (event) => {
    event.preventDefault();
    console.log(
      `Name: ${name}, Email: ${email}, Subject: ${subject}, message: ${message}`
    );
  };

  return (
    <>
      <Col md={8} sm={6} xs={12}>
        <FormContainer>
          <SmallTagline>We'd love to hear from you</SmallTagline>
          <ContactHeading>Send us a message</ContactHeading>
          <form onSubmit={submitForm}>
            <FormRow>
              <Label>Full Name</Label>
              <InputField
                type='text'
                value={name}
                onChange={handleChange}
                placeholder='John Doe'
                name='name'
              />
            </FormRow>
            <FormRow>
              <Label>Email</Label>
              <InputField
                type='text'
                value={email}
                onChange={handleChange}
                placeholder='johndoe@abc.com'
                name='email'
              />
            </FormRow>
            <FormRow>
              <Label>Subject</Label>
              <InputField
                type='text'
                value={subject}
                onChange={handleChange}
                placeholder='Your query about?'
                name='subject'
              />
            </FormRow>
            <FormRow className='align-items-start'>
              <Label>Message</Label>
              <MessageField
                value={message}
                onChange={handleChange}
                placeholder='How can we help?'
                name='message'
              ></MessageField>
            </FormRow>
            <FormRow>
              <SubmitBtn type='submit'>Drop message</SubmitBtn>
            </FormRow>
          </form>
        </FormContainer>
      </Col>
    </>
  );
}
