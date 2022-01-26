import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../configs/urls";

export const postService = {
    getAll: ()=> axiosService.get(urls.posts).then(value => value.data),
    getId: (id)=> axiosService.get(`${urls.posts}/${id}`).then(value => value.data)
}
