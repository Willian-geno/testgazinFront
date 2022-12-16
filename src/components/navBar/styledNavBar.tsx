import styled from "styled-components";

interface ICNaviBar {
  isOpen: boolean;
}

export const CNavBar = styled.div<ICNaviBar>`
  display: ${(props) => !props.isOpen && "none"};
  position: absolute;
  left: ${(props) => (props.isOpen ? 0 : -100)};
  width: 350px;
  height: 75%;
  background-color: wheat;
  border-radius: 0 10px 10px 10px;

  padding-top: 25px;
`;

export const HaderNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
  align-items: center;
`;
export const THeader = styled.ul`
  font-size: 20px;
  font-weight: 900;
  padding: 15px;
`;
export const ItemBoryNavBar = styled.li`
  list-style: none;
  border: 1.5px solid;
  width: 100%;
  height: 10%;
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
  box-shadow: 1px 1px 2px black;

  :hover {
    color: #1966c2;
    border-color: #1966c2;
    box-shadow: 1px 1px 2px #1966c2;
  }
  :active {
    color: #5497e9;
    border-color: #5497e9;
    box-shadow: 1px 1px 2px #5497e9;
  }
`;
export const BoryNavBar = styled.ul`
  padding: 25px 15px;
  height: 100%;
`;

export const ButtonClose = styled.div`
  margin-right: 15px;
  padding: 3px;
  border: 2px solid;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 2px black;

  :hover {
    border-color: red;
    color: red;
    box-shadow: 1px 1px 2px red;
  }
`;
