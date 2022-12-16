import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineSearch,
} from "react-icons/ai";
import InputIcon from "../componentsHeader/InputHeader";
import { ButtonHeader, Conteiner } from "./styledHaeder";

interface IHeaderProps {
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isOpen, setIsOpen }: IHeaderProps) => {
  const FButtonHeader = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <Conteiner>
      <ButtonHeader onClick={FButtonHeader}>
        {isOpen ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </ButtonHeader>
      <InputIcon
        Icon={AiOutlineSearch}
        placeholder="Pesquise o desenvolvedor"
      />
    </Conteiner>
  );
};

export default Header;
