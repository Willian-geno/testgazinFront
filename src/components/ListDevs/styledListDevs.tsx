import styled from "styled-components";

export const CListDevs = styled.div` 
    width: 25vw;
    background-color:wheat;
    height: 75vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    overflow-x: hidden;
    scrollbar-color: rebeccapurple green;

    padding: 20px;
    border-radius: 10px;

 scrollbar-width: thin;
  scrollbar-color: blue orange;



::-webkit-scrollbar {
    width: 15px;
}

::-webkit-scrollbar-track {
  background: blue;
}

::-webkit-scrollbar-thumb {
    background-color: wheat;
    width: 70%;
    border-radius: 5px;
}

`


export const CardDesvs = styled.div`
    height: 18vh;
    width: 100%;
    background-color: red;
    border: solid 1px black;
    border-radius:10px;
    padding: 10px;
`
export const Name = styled.div`
    font-size: 25px;
    font-weight: 500;
    margin: 15px;
`
export const CIcon = styled.div`
    font-size: xx-large;
`
export const BoryCard = styled.div`
    background-color: white;
    `
export const Data = styled.div`
    color:blue;
    position: relative;
    left:-1;
    font-style: italic;
`
export const NivelCard = styled.div``
export const HeaderCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

`
export const CHobby = styled.div``
export const HobbyTitle = styled.div``


