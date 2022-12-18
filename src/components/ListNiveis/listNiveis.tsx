import { INivel, useApi } from "../../contexts/apiContexrt/apiContext";
import {  CardList ,   BoryCard,CListNiveis } from "./styledListNiveis"
import {BsFillStarFill} from "react-icons/bs"
import { CIcon, HeaderCard, Name } from "../ListDevs/styledListDevs";

const ListNiveis = () => {

    const {niveis} = useApi();

    return <CListNiveis>
         {niveis.map((item:INivel, index: number) => {
        return <CardList key={index}>
            <HeaderCard>
                <CIcon><BsFillStarFill/></CIcon>
                <Name>Nivel</Name>
            </HeaderCard>
            <BoryCard>
               {item.nivel}
            </BoryCard>
            </CardList>
            })}
        </CListNiveis>

}


export default ListNiveis