import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfoWrapper}>
            <div className={classes.picture}>
                <img src="https://avatars.mds.yandex.net/get-pdb/1052215/b4dee7ad-777a-403e-af1b-7b442edf0816/s1200?webp=false" alt="ava"/>
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