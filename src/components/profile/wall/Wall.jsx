import React from "react";
import classes from './Wall.module.css';
import Post from "./Post/Post";
import Send from "./Send/Send";




const Wall = (props) => {

    const postElement = props.postsData
        .map(p => <Post massage={p.massage} counterLike={p.counterLike}/>);


    return (
        <div className={classes.posts}>
            <Send />
            {
                postElement
            }
        </div>
    );
}
export default Wall;