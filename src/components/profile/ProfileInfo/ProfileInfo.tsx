import React, {useState} from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import withPhoto from './../../../assets/unnamed.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm'
import {UserProfileType} from '../../../types/types'
import {ThunkActionProfileType} from '../../../redux/profilePage-reducer'

type Props = {
    saveProfile: (userProfile: UserProfileType) => void
    userProfile: UserProfileType | null
    savePhoto: (photo: File) => ThunkActionProfileType
    status: string
    ifOwner: boolean
    updateStatusUser: (status: string) => ThunkActionProfileType
}

type FormData = UserProfileType

const ProfileInfo: React.FC<Props> = (props) => {

    const [editMode, setEditMode] = useState(false)

    const onSubmit = (formData: FormData) => {
        props.saveProfile(formData)
            // @ts-ignore
            .then(() => {
                setEditMode(false)
            })
    }


    const changeMainPhoto = (e: any) => {
        if (e.target.files.length) props.savePhoto(e.target.files[0])
    }

    if (!props.userProfile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profileInfoWrapper}>
            <div className={classes.picture}>
                <img src={props.userProfile.photos.large || withPhoto} alt="ava"/>
            </div>
            <div>{props.ifOwner && <input type={'file'} onClick={changeMainPhoto}/>}</div>
            <div className={classes.info}>

                <b>Status: </b><ProfileStatusWithHooks ifOwner={props.ifOwner} status={props.status}
                                                       updateStatusUser={props.updateStatusUser}/>

                {editMode
                    ? <ProfileDataForm
                        onSubmit={onSubmit}
                        profile={props.userProfile}/>
                    : <ProfileData editModeOn={() => {
                        setEditMode(true)
                    }} profile={props.userProfile} ifOwner={props.ifOwner}/>}

            </div>
        </div>
    )
}

type PropsProfileData = {
    profile: UserProfileType
    ifOwner: boolean
    editModeOn: () => void

}

const ProfileData: React.FC<PropsProfileData> = ({profile, ...props}) => {
    return <div>
        <div><b>Full name</b> {profile.fullName}</div>
        <div><b>Looking for a job</b>{profile.lookingForAJob && profile.lookingForAJob ? ' Yes' : ' No'}</div>
        <div><b>Looking for a job description</b><br/>{profile.lookingForAJobDescription}</div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map((key) => (
            /*@ts-ignore*/
            <Contact title={key} value={profile.contacts[key]} key={key}/>))} </div>
        {props.ifOwner && <button onClick={props.editModeOn}> edit</button>}
    </div>
}

type PropsContact = {
    title: string
    value: string
}

const Contact: React.FC<PropsContact> = ({title, value}) => {
    return <div className={classes.contact}><b>{title}</b>{value}</div>
}

export default ProfileInfo