import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import withPhoto from "./../../../assets/unnamed.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.userProfile) {
        return <Preloader/>
    }

  const  changeMainPhoto = (e) => {
        if(e.target.files.length) props.savePhoto(e.target.files[0])
    }


    return (
        <div className={classes.profileInfoWrapper}>
            <div className={classes.picture}>
                <img src={props.userProfile.photos.large || withPhoto} alt="ava"/>
            </div>
            <div>{props.ifOwner && <input type={"file"} onClick={changeMainPhoto}/>}</div>
            <div className={classes.info}>

                <div>{props.userProfile.fullName}</div>

                <ProfileStatusWithHooks status={props.status} updateStatusUser={props.updateStatusUser}/>

                <div>{props.userProfile.aboutMe}</div>
                <div><b>{props.userProfile.lookingForAJobDescription}</b></div>
            </div>
        </div>
    );
}
export default ProfileInfo;