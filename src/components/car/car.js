import {useDispatch} from "react-redux";
import {deleteCar} from "../../store";

export default function Car({car:{id,model,price,year}}){
    const dispatch = useDispatch()
    return(
        <div>
<div>
    model: {model}<br/>
    price: {price}<br/>
    year: {year}
</div>
            <div>
                <button onClick={()=>dispatch(deleteCar({id}))}>Delete</button>
            </div>
        </div>
    )
}