export type PostDataType = {
    id: number
    message: string
    counterLike: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type UserProfileType = {
    aboutMe?: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type UserProfileForHookType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    'contacts.github': string
    'contacts.vk': string
    'contacts.facebook': string
    'contacts.instagram': string
    'contacts.twitter': string
    'contacts.website': string
    'contacts.youtube': string
    'contacts.mainLink': string

    photos: PhotosType
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}