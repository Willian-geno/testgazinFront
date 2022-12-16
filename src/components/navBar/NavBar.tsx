import { AiOutlineClose } from "react-icons/ai";
import { ButtonHeader } from "../header/styledHaeder";
import {
  BoryNavBar,
  CNavBar,
  HaderNavBar,
  ItemBoryNavBar,
  THeader,
  ButtonClose,
} from "./styledNavBar";

interface INavBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({ isOpen, setIsOpen }: INavBarProps) => {
  return (
    <CNavBar isOpen={isOpen}>
      <HaderNavBar>
        <THeader>Escolha a Categoria</THeader>
        <ButtonClose onClick={() => setIsOpen(false)}>
          <AiOutlineClose />
        </ButtonClose>
      </HaderNavBar>
      <BoryNavBar>
        <ItemBoryNavBar>Desenvolvedor</ItemBoryNavBar>
        <ItemBoryNavBar>Niveis</ItemBoryNavBar>
      </BoryNavBar>
    </CNavBar>
  );
};

export default NavBar;
