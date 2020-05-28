import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import WallContainer from "./wall/WallContainer";

const Profile = (props) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo saveProfile={props.saveProfile} ifOwner={props.ifOwner} savePhoto={props.savePhoto} userProfile={props.userProfile} status={props.status} updateStatusUser={props.updateStatusUser} />
            <WallContainer />
        </div>
    );
}
export default Profile;