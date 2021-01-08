import styled from "styled-components";

export const Center = styled.section`
  min-height: 68vh;
  display: grid;
  place-items: center;
  padding: 3rem 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  min-height: 87%;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.12);
`;

export const LeftImgDiv = styled.div`
  width: 50%;
  background: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const RightFormDiv = styled.div`
  width: 50%;
  height: 100%;
  padding: 1.5rem 2.8rem;

  h2 {
    color: #444;
    font-size: 2rem;
    padding-bottom: 7px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 3px;
      width: 3.6rem;
      background: #8c0;
    }
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  margin-right: ${(props) => (props.half ? "2.4rem" : "0")};
  label {
    color: #555;
    font-size: 1.5rem;
    display: flex;
    align-items: flex-end;
    p {
      margin-left: 6px;
    }
  }
  p {
    color: tomato;
    margin-left: 0;
    font-size: 1.3rem;
  }
  button {
    height: 3.8rem;
    color: #fff;
    background: #555;
    font-size: 1.6rem;
    letter-spacing: 0.6px;
    outline: none;
    border: none;
    border-radius: 4px;
    transition: all 0.24s;
    &:hover {
      background: #333;
    }
    &:active {
      background: #111;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 4px;
  font-size: 1.75rem;
  outline: none;
  border: none;
  color: #333;
  border-bottom: 2px solid #999;
  transition: border 0.24s;
  &:hover {
    border-bottom: 2px solid #555;
  }
  &:focus {
    border-bottom: 2px solid #1e90ff;
  }
`;
