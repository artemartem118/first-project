import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '02b9c283-65ab-4aa6-9c25-cf1f7a717d1b'}
})

export const friendsAPI = {
    getUsers(pageSize: number, pageNum: number) {
        return instance.get(`users?count=${pageSize}&page=${pageNum}`).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status})
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(formData: any) {
        return instance.put('profile', formData)
    }

}

export const authAPI = {
    setProfileData() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}
