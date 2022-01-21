import {axiosService} from "./axiosService";
import {users} from "../urls/urls";

export const userService = {
    getAll: () => axiosService.get(users.users).then(value => value.data)
}