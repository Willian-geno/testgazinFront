import ListDevs from "../../components/ListDevs/ListDevs"
import ListNiveis from "../../components/ListNiveis/listNiveis"
import { useApi } from "../../contexts/apiContexrt/apiContext"
import { CBDashBoard } from "./styledCDachBoard"

const BDashborad = () => {

    const {devs} = useApi()

    return <CBDashBoard>
        <ListDevs/>
        <ListNiveis/>
    </CBDashBoard>
}

export default BDashborad