import axios from 'axios'
import {PhotosType, UserProfileType, UserType} from '../types/types'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '02b9c283-65ab-4aa6-9c25-cf1f7a717d1b'}
})

export enum ResultCodes {
    success = 0,
    error = 1
}

export enum ResultCodeForCaptcha {
    captcha = 10
}

interface GetUsers {
    items: Array<UserType>
    totalCount: number
    error: null | string
}

interface IResponse {
    resultCode: ResultCodes
    messages: Array<string | void>
    data: Object
}

export const friendsAPI = {
    getUsers(pageSize: number, pageNum: number) {
        return instance.get<GetUsers>(`users?count=${pageSize}&page=${pageNum}`).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<IResponse>(`follow/${userId}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<IResponse>(`follow/${userId}`).then(response => response.data)
    }
}

interface ISavePhoto extends IResponse {
    data: { photos: PhotosType }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<UserProfileType>('profile/' + userId).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>('profile/status/' + userId).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<IResponse>('profile/status/', {status}).then(response => response.data)
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<ISavePhoto>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    saveProfile(formData: any) {
        return instance.put<IResponse>('profile', formData).then(response => response.data)
    }

}

interface IMe extends IResponse {
    data: {
        id: number
        email: string
        login: string
    }
}

interface ILogin  {
    messages: Array<string | void>
    data: {
        userId: number
    }
    resultCode: ResultCodeForCaptcha | ResultCodes
}

export const authAPI = {
    setProfileData() {
        return instance.get<IMe>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<ILogin>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => response.data)
    },
    logout() {
        return instance.delete<IResponse>(`auth/login`).then(response => response.data)
    }
}

interface ICaptchs {
    url: string
}

export const securityAPI = {
    getCaptcha() {
        return instance.get<ICaptchs>(`security/get-captcha-url`).then(response => response.data)
    }
}
