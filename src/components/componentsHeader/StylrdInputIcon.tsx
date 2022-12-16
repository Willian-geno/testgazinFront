import styled from "styled-components";

export const CInput = styled.div`
  width: 400px;
  height: 45px;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 15px;
  border: 1.5px solid black;
`;

export const CIcon = styled.div`
  border: 1px solid #1966c2;
  height: 60%;
  border-radius: 1cm;
  align-items: center;
  display: flex;
  font-size: x-large;
  margin: 0 15px;
  padding: 2px;
  color: #7b8fa8;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  font-size: large;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  ::placeholder {
    color: #7b8fa8;
    opacity: 0.75;
  }
`;
