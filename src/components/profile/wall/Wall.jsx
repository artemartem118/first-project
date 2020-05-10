import React from "react";
import classes from './Wall.module.css';
import Post from "./post/Post";

const Wall = () => {
    return (
        <div className={classes.posts}>
            <div>

            </div>
            <Post massage='i dont know' />
            <Post massage='what?' />
        </div>
    );
}
export default Wall;