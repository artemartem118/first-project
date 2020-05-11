import React from "react";
import classes from "./Send.module.css"

const Send = () => {
    return (
        <div className={classes.addPostsWrapper}>
            <div className={classes.text}>
                <textarea></textarea>
            </div>
            <div className={classes.btn}>
                <button>Add posts</button>
            </div>
        </div>
    );
};
export default Send;