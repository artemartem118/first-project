import React from "react";
import classes from './Wall.module.css';
import Post from "./Post/Post";
import Send from "./Send/Send";


const Wall = (props) => {
    const postsElement = props.profilePage.postsData
        .map(p => <Post message={p.message} counterLike={p.counterLike}/>);


    return (
        <div className={classes.posts}>
            <Send
                addPost={props.addPost}
                profilePage={props.profilePage}
            />

            <div>
                {postsElement}
            </div>

        </div>
    );
}
export default Wall;