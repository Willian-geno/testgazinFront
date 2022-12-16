import { IDevs, useApi } from "../../contexts/apiContexrt/apiContext";
import { CardDesvs, CListDevs, Name, HeaderCard, CIcon, BoryCard, NivelCard } from "./styledListDevs"

const ListDevs = () => {

    const {devs} = useApi();

 return <CListDevs>

    {devs.map((item:IDevs, index) => {
        return <CardDesvs key={index}>
            <HeaderCard>
                <Name>{item.name}</Name>
                <CIcon></CIcon>
            </HeaderCard>
            <BoryCard>
                {item.datanascimento}
                {item.hobby}
            </BoryCard>
            <NivelCard>
            
            {item.nivel.nivel}

            </NivelCard>
        </CardDesvs>
    })}

   
            
      
 </CListDevs>
      
}

export default ListDevs;