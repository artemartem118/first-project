import React, {useState} from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import withPhoto from "./../../../assets/unnamed.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);


    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false)
            });
    }

    if (!props.userProfile) {
        return <Preloader/>
    }

    const changeMainPhoto = (e) => {
        if (e.target.files.length) props.savePhoto(e.target.files[0])
    }

    return (
        <div className={classes.profileInfoWrapper}>
            <div className={classes.picture}>
                <img src={props.userProfile.photos.large || withPhoto} alt="ava"/>
            </div>
            <div>{props.ifOwner && <input type={"file"} onClick={changeMainPhoto}/>}</div>
            <div className={classes.info}>


                <b>Status:</b><ProfileStatusWithHooks status={props.status} updateStatusUser={props.updateStatusUser}/>

                {editMode ? <ProfileDataForm initialValues={props.userProfile} onSubmit={onSubmit}
                                             profile={props.userProfile}/> :
                    <ProfileData editModeOn={() => {
                        setEditMode(true)
                    }} profile={props.userProfile} ifOwner={props.ifOwner}/>}

            </div>
        </div>
    );
}

const ProfileData = ({profile, ...props}) => {
    return <div>
        <div><b>Full name</b> {profile.fullName}</div>
        <div><b>About me</b> {profile.aboutMe}</div>
        <div><b>Looking for a job</b>{profile.lookingForAJob && profile.lookingForAJob ? " Yes" : " No"}</div>
        <div><b>Looking for a job description</b><br/>{profile.lookingForAJobDescription}</div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => (
            <Contact title={key} value={profile.contacts[key]} key={key}/>))} </div>
        {props.ifOwner && <button onClick={props.editModeOn}> edit</button>}
    </div>

};


const Contact = ({title, value}) => {
    return <div className={classes.contact}><b>{title}</b>{value}</div>
}
// {
//     "aboutMe": null,
//     "contacts": {
//     "facebook": null,
//         "website": null,
//         "vk": null,
//         "twitter": null,
//         "instagram": null,
//         "youtube": null,
//         "github": null,
//         "mainLink": null
// },
//     "lookingForAJob": false,
//     "lookingForAJobDescription": null,
//     "fullName": "artemartem",
//     "userId": 8227,
//     "photos": {
//     "small": "https://social-network.samuraijs.com/activecontent/images/users/8227/user-small.jpg?v=6",
//         "large": "https://social-network.samuraijs.com/activecontent/images/users/8227/user.jpg?v=6"
// }
// }
export default ProfileInfo;