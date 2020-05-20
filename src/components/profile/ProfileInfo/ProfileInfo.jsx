import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import dontknow from "../../../some/DSC07473.jpg"

const ProfileInfo = (props) => {
    if(!props.userProfile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profileInfoWrapper}>
            <div className={classes.picture}>
                <img src={props.userProfile.photos.large ? props.userProfile.photos.large : dontknow } alt="ava"/>
            </div>
            <div className={classes.info}>
                <div>{props.userProfile.fullName}</div>
                <div>{props.userProfile.aboutMe}</div>
                <div><b>{props.userProfile.lookingForAJobDescription}</b></div>
            </div>
        </div>
    );
}
export default ProfileInfo;