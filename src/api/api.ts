import axios from "axios";
// DAL


const apiInstanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "43312b93-73fd-4342-90f4-f7fe2aad1adb"
    }
})

export const usersAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return apiInstanse.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    unFollow (usrId: number) {
        return apiInstanse.delete(`follow/${usrId}`).then(res => res.data)
    },
    follow(usrId: number) {
        return apiInstanse.post(`follow/${usrId}`).then(res => res.data)
    },
}



