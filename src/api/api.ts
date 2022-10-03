import axios from "axios";
// DAL


const apiInstance = axios.create({
    withCredentials: true,

    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "43312b93-73fd-4342-90f4-f7fe2aad1adb"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return apiInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    unFollow(usrId: number) {
        return apiInstance.delete(`follow/${usrId}`).then(res => res.data)
    },
    follow (usrId: number) {
        return apiInstance.post(`follow/${usrId}`).then(res => res.data)
    },
    getProfile (profileId: string) {
        return apiInstance.get(`profile/` + profileId).then(res => res.data)
    }
}

export const authAPI = {
    me() {
        return apiInstance.post(`auth/me`).then(res => res.data)
    }
}



