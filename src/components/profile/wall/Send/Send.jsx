import React from "react";
import classes from "./Send.module.css"

const Send = (props) => {


    const onButtonClik = () => {
        props.addPost();
    }
    const onPostChange = (event) => {
        let writePostText = event.target.value;
        props.updateTextareaPost(writePostText);
    }
    return (
        <div className={classes.addPostsWrapper}>
            <div className={classes.text}>
                <textarea
                    placeholder={'enter'}
                    onChange={onPostChange} value={props.profilePage.newPostText}/>
            </div>
            <div className={classes.btn}>
                <button onClick={onButtonClik}>Add posts</button>
            </div>
        </div>
    );
};
export default Send;