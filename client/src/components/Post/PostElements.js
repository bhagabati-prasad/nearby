import styled from "styled-components";
import AdBg from "../../image/wireframe.jpg";

export const AdHeading = styled.div`
  min-height: 30vh;
  width: 100%;
  display: grid;
  place-items: center;
  background: url(${AdBg});
`;
export const AdTitle = styled.h1`
  color: rgba(0, 0, 0, 0.4);
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
`;

export const FormSection = styled.div`
  padding: 2rem;
  width: 60%;
  max-width: 100%;
  margin: 0 auto;
`;
export const FormHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: capitalize;
  padding: 1.6rem 0 0.7rem 0;
`;

export const SplitRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 1.4rem 0;
  margin-right: 1.4rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;
export const Star = styled.span`
  color: #f00;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.4rem;
  border-radius: 0.3rem;
  background: #eee;
  outline: none;
  border: 1.4px solid #999;
  color: #555;
  font-size: 1.58rem;
  letter-spacing: 0.5px;
  padding: 0 1.2rem;
  transition: border 0.24s;
  &:hover {
    border: 1.4px solid #222;
  }
  &:focus {
    border: 1.4px solid #1e90ff;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 11rem;
  max-height: 14rem;
  border-radius: 3px;
  background: #eee;
  outline: none;
  border: 1.4px solid #999;
  color: #555;
  font-size: 1.5rem;
  padding: 0.5rem 1.2rem;
  transition: border 0.24s;
  &:hover {
    border: 1.4px solid #222;
  }
  &:focus {
    border: 1.4px solid #1e90ff;
  }
`;

export const SelectList = styled.select`
  width: 100%;
  height: 3.4rem;
  border-radius: 0.3rem;
  background: #eee;
  outline: none;
  border: 1.4px solid #999;
  color: #555;
  font-size: 1.58rem;
  letter-spacing: 0.5px;
  padding: 0 1.2rem;
  transition: border 0.24s;
  &:hover {
    border: 1.4px solid #222;
  }
`;

export const SubmitBtn = styled.button`
  height: 3.9rem;
  width: 10rem;
  display: grid;
  place-items: center;
  color: #fff;
  border: 2px solid #fff;
  background: #333;
  font-size: 1.5rem;
  letter-spacing: 0.7px;
  outline: none;
  margin-top: 2rem;
  border-radius: 4px;
  transition: all 0.24s;
  &:hover {
    color: #333;
    background: transparent;
    border: 2px solid #666;
  }
`;
