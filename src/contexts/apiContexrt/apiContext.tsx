import { createContext, useContext, useState } from "react";

interface IApiContext {
  devs: IDevs[],
  setDevs: React.Dispatch<React.SetStateAction<IDevs[]>>
}

export interface IDevs {
  id: number
  nivel: INivel
  name: string
  sexo: string
  datanascimento: string
  idade: string
  hobby: string
}

export interface INivel {
  id: number
  nivel: string
}

interface ApiProps {
    children: React.ReactNode;
  }
  

const ApiContext = createContext<IApiContext>({} as IApiContext)

export const  ApiProvider = ({children}:ApiProps) => {
    const [  devs, setDevs] = useState<IDevs[]>([
      {
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },{
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },{
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },{
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },
      {
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },{
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },{
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },{
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },
      {
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },{
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },{
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },{
        id: 1,
        nivel:  {
          id: 1,
          nivel: "Junior",
        },  
        name: "Willian Gustavo",
        sexo: "Mascolino",
        datanascimento: "28/02/2000",
        idade: "22",
        hobby: "jogar vidio-game",
      },])

      return(
      <ApiContext.Provider value={{devs, setDevs}}>
        {children}
      </ApiContext.Provider>
      )    
    }

    export const useApi = () => useContext(ApiContext)
