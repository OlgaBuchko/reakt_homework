import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../configs/urls";

export const userService = {
    getAll:()=> axiosService.get(urls.users).then(value => value.data),
    getId:(id)=> axiosService.get(`${urls.users}/${id}`).then(value => value.data)
}