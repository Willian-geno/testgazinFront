import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./MenuContext/MenuConstext";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <MenuProvider>{children}</MenuProvider>
    </BrowserRouter>
  );
};

export default Providers;
