import React from "react";
import classes from './Wall.module.css';
import Post from "./Post/Post";
import Send from "./Send/Send";

const postsData = [
    {id: 1, massage: 'i dont know' , counterLike: 2},
    {id: 2, massage: 'what?' , counterLike: 1}
];


const Wall = () => {
    return (
        <div className={classes.posts}>
            <Send />
            <Post massage={postsData[0].massage} counterLike={postsData[0].counterLike}/>
            <Post massage={postsData[1].massage} counterLike={postsData[1].counterLike}/>
        </div>
    );
}
export default Wall;