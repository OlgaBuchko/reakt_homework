import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../configs/urls";

export const AlbumsService={
    getAll : ()=>axiosService.get(urls.albums).then(value => value.data),
    getByUserId: (id)=>axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getPhotoByAlbumId : (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}