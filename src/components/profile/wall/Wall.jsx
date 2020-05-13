import React from "react";
import classes from './Wall.module.css';
import Post from "./Post/Post";
import Send from "./Send/Send";


const Wall = (props) => {

    const postsElement = props.store.getPosts
        .map(p => <Post massage={p.massage} counterLike={p.counterLike}/>);


    return (
        <div className={classes.posts}>
            <Send
                store={props.store}/>

            {postsElement}

        </div>
    );
}
export default Wall;