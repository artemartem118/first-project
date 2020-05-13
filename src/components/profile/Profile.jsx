import React from "react";
import classes from './Profile.module.css';
import Wall from "./wall/Wall";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo/>
            <Wall
                store={props.store} />
        </div>
    );
}
export default Profile;