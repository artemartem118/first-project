import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.userProfile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profileInfoWrapper}>
            <div className={classes.picture}>
                <img src={props.userProfile.photos.large} alt="ava"/>
            </div>
            <div className={classes.info}>
                <div>Tom Riddle</div>
                <div> love snake</div>
                <div><b>i will win in this war!11!!</b></div>
            </div>
        </div>
    );
}
export default ProfileInfo;