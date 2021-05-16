
import Collectthumb from "../components/Collectthumb";
import { useStateValue } from "./stateProvider";


function Collections() {
    const [{ basket }, dispatch] = useStateValue();


    return (
        basket.length <= 0 ? <div>nothing to show</div> :
            <div className="flex">
                {
                    basket.map((result) => {
                        return <Collectthumb key={result.id} result={result} />
                    })
                }

            </div>

    )
}


export default Collections;


