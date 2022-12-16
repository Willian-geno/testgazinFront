import { IDevs, useApi } from "../../contexts/apiContexrt/apiContext";
import {Data, CardDesvs, CListDevs, Name, HeaderCard, CIcon, BoryCard, NivelCard, CHobby, HobbyTitle } from "./styledListDevs"
import {FaUserCircle} from "react-icons/fa"

const ListDevs = () => {

    const {devs} = useApi();

 return <CListDevs>

    {devs.map((item:IDevs, index: number) => {
        return <CardDesvs key={index}>
            <HeaderCard>
                <CIcon><FaUserCircle/></CIcon>
                <Name>{item.name}</Name>
            </HeaderCard>
            <BoryCard>
                <Data>
                {item.datanascimento}
                </Data>
                <CHobby>
                    <HobbyTitle>
                        Hooby:
                    </HobbyTitle>
                {item.hobby}
                </CHobby>
            </BoryCard>
            <NivelCard>
            
            {item.nivel.nivel}

            </NivelCard>
        </CardDesvs>
    })}

   
            
      
 </CListDevs>
      
}

export default ListDevs;