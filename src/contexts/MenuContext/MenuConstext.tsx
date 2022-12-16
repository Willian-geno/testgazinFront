import React, { createContext, useContext, useState } from "react";

interface IMenuContext {
  menu: number;
}

interface MenuProps {
  children: React.ReactNode;
}

const MenuContext = createContext<IMenuContext>({} as IMenuContext);

export const MenuProvider = ({ children }: MenuProps) => {
  const [menu, setMenu] = useState(0);
  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
