import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import WallContainer from "./wall/WallContainer";

const Profile = (props) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo userProfile={props.userProfile} />
            <WallContainer />
        </div>
    );
}
export default Profile;