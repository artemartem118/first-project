import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import WallContainer from './wall/WallContainer'
import {UserProfileType} from '../../types/types'
import {ThunkActionProfileType} from '../../redux/profilePage-reducer'


type Props = {
    saveProfile: (userProfile: UserProfileType) => ThunkActionProfileType
    ifOwner: boolean
    userProfile: UserProfileType | null
    status: string
    updateStatusUser: (status: string) => ThunkActionProfileType
    savePhoto: (photo: File) => ThunkActionProfileType
}

const Profile: React.FC<Props> = (props) => {

    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo saveProfile={props.saveProfile}
                         ifOwner={props.ifOwner}
                         savePhoto={props.savePhoto}
                         userProfile={props.userProfile}
                         status={props.status}
                         updateStatusUser={props.updateStatusUser}/>
            {/*@ts-ignore*/}
            <WallContainer/>
        </div>
    )
}
export default Profile