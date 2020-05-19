import * as axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "02b9c283-65ab-4aa6-9c25-cf1f7a717d1b"}
});

export const usersAPI = {
    getUsers(pageSize = 10,pageNum = 1) {
       return instance.get(`users?count=${pageSize}&page=${pageNum}`).then(response => response.data)
    },
    getUsersForNewPage(pageSize = 10,pageNum = 1) {
       return instance.get(`users?count=${pageSize}&page=${pageNum}`).then(response => response.data)
    },

};

// axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {
//     withCredentials: true,
//     headers: {"API-KEY": "02b9c283-65ab-4aa6-9c25-cf1f7a717d1b"}
// })

export const followAPI = {
    unfollow(userId) {
        debugger
        return instance.delete(`${userId}`)
            .then(response => {
                if (response.data.resultCode === 0) return;
            })
    },
    follow() {

    },
};