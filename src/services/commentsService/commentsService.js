import {axiosService} from "../axiosService/axiosService";

import {urls} from "../../configs/urls";

export const commentsService = {
    getPostId: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}