import React from "react";
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.text}>
                <div className={classes.massage}>{props.massage}</div>
                <div className={classes.like}>like {props.counterLike}</div>
            </div>
            <img src='https://avatars.mds.yandex.net/get-pdb/214908/5cf679dc-d4ef-43f0-88be-9b2a7fda87d5/s1200?webp=false'/>
        </div>
    );
}
export default Post;