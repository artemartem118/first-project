import React, {useState} from 'react'
import styles from './ProfileInfo.module.scss'
import Preloader from '../../Common/Preloader/Preloader'
import withPhoto from './../../../assets/unnamed.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm'
import {UserProfileType} from '../../../types/types'
import {ThunkActionProfileType} from '../../../redux/profilePage-reducer'
import cn from 'classnames'
import Button from '../../Common/Button/Button'

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
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    if (!props.userProfile) {
        return <Preloader/>
    }

    return (
        <div className={styles.profileInfo}>
            <div className={styles.profileInfo__picture}>
                <img className={styles.profileInfo__img} src={props.userProfile.photos.large || withPhoto} alt="ava"/>
            </div>
            <div className={styles.profileInfo__inputFile}>
                {props.ifOwner &&
                <input type={'file'} onClick={changeMainPhoto}/>}
            </div>
            <div className={cn(styles.profileInfo__description, styles.description)}>
                <div className={styles.description__status}>
                    <b>Status: </b><ProfileStatusWithHooks ifOwner={props.ifOwner} status={props.status}
                                                           updateStatusUser={props.updateStatusUser}/>
                </div>
                <div className={styles.description__about}>
                    {editMode
                        ? <ProfileDataForm
                            onSubmit={onSubmit}
                            profile={props.userProfile}/>
                        : <ProfileData editModeOn={() => {
                            setEditMode(true)
                        }} profile={props.userProfile} ifOwner={props.ifOwner}/>}
                </div>
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
    return (
        <div className={styles.profileData}>
            <div><b>Full name</b> {profile.fullName}</div>
            <div><b>Looking for a job</b>{profile.lookingForAJob && profile.lookingForAJob ? ' Yes' : ' No'}</div>
            <div><b>Looking for a job description</b><br/>{profile.lookingForAJobDescription}</div>
            <div><b>Contacts:</b> {Object.keys(profile.contacts).map((key) => (
                /*@ts-ignore*/
                <Contact title={key} value={profile.contacts[key]} key={key}/>))} </div>
            <div className={styles.profileData__btn}>{props.ifOwner && <Button name={'Edit'} handleClick={props.editModeOn} />}</div>
        </div>
    )
}

type PropsContact = {
    title: string
    value: string
}

const Contact: React.FC<PropsContact> = ({title, value}) => {
    return <div className={styles.contact}><b>{title}</b>{value}</div>
}

export default ProfileInfo