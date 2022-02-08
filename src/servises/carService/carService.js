import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../config";

export const carService= {
    getAll:()=> axiosService.get(urls.cars).then(value => value.data),
    deleteById:(id)=> axiosService.delete(`${urls.cars}/${id}`).then(value => value.data),
    createCar:(car)=>axiosService.post(`${urls.cars}`,car).then(value => value.data),
    updateCArById:(id,car)=>axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}
