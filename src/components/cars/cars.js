import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Car from "../car/car";
import {getAllCars} from "../../store";

export default function Cars() {
    const {cars} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])
    console.log(cars)
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    )
}