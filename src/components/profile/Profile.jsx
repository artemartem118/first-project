import React from "react";
import classes from './Profile.module.css';
import Wall from "./wall/Wall";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                ava + dis
            </div>
            <Wall />
        </div>
    );
}
export default Profile;