import { truncate } from "fs";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Header from "../../components/header/header";
import NavBar from "../../components/navBar/NavBar";
import BDashborad from "../bDashboard/bDashboard";

const Dashbord = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNaviBar = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <BDashborad/>
    </>
  );
};

export default Dashbord;
