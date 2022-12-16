import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./MenuContext/MenuConstext";
import { ReactNode } from "react";
import { ApiProvider } from "./apiContexrt/apiContext";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
    <ApiProvider>
      <MenuProvider>{children}</MenuProvider>
    </ApiProvider>
    </BrowserRouter>
  );
};

export default Providers;
