import React from "react";
import classes from './Wall.module.css';
import Post from "./Post/Post";
import Send from "./Send/Send";


const Wall = (props) => {
    const state = props.store.getState().profilePage;
    const postsElement = state.postsData
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