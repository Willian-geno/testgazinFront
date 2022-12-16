import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100vw;
  height: 70px;
  border-radius: 0 0 5px 5px;

  //background-color: #212121;
  background-color: #1966c2;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonHeader = styled.div`
  font-size: xx-large;
  margin: 0 25px;
  background-color: white;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 5px;
  border-radius: 4px;

  :active {
    background-color: #d1daf5;
    box-shadow: 2px 2px 5px white;
  }
`;
