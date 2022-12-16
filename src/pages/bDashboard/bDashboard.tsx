import ListDevs from "../../components/ListDevs/ListDevs"
import { useApi } from "../../contexts/apiContexrt/apiContext"
import { CBDashBoard } from "./styledCDachBoard"

const BDashborad = () => {

    const {devs} = useApi()

    return <CBDashBoard>
        <ListDevs></ListDevs>
    
    </CBDashBoard>
}

export default BDashborad