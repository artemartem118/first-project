import React from 'react'
import styles from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import WallContainer from './wall/WallContainer'
import {UserProfileType} from '../../types/types'
import {ThunkActionProfileType} from '../../redux/profilePage-reducer'
import Preloader from '../Common/Preloader/Preloader'


type Props = {
    saveProfile: (userProfile: UserProfileType) => ThunkActionProfileType
    ifOwner: boolean
    userProfile: UserProfileType | null
    status: string
    updateStatusUser: (status: string) => ThunkActionProfileType
    savePhoto: (photo: File) => ThunkActionProfileType
}

const Profile: React.FC<Props> = (props) => {


    if (!props.userProfile) {
        return <Preloader/>
    }

    return (
        <div className={styles.profile}>
            <div className={styles.profile__info}>
                <ProfileInfo saveProfile={props.saveProfile}
                             ifOwner={props.ifOwner}
                             savePhoto={props.savePhoto}
                             userProfile={props.userProfile}
                             status={props.status}
                             updateStatusUser={props.updateStatusUser}
                />
            </div>
            <div className={styles.profile__wall}>
                {/*@ts-ignore*/}
                <WallContainer/>
            </div>
        </div>
    )
}
export default Profile