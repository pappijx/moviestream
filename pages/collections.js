
import Collectthumb from "../components/Collectthumb";
import { useStateValue } from "../components/stateProvider";


function Collections() {
    const [{ basket }, dispatch] = useStateValue();


    return (
        basket.length <= 0 ? <div className="w-full h-full grid place-items-center mt-48">Your collection is empty...Add some movies first</div> :
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


