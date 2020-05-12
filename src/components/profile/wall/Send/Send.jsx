import React from "react";
import classes from "./Send.module.css"

const Send = () => {

    let newPostElement = React.createRef();

    const onButtonClik = () => {
        alert (newPostElement.current.value);
    }

    return (
        <div className={classes.addPostsWrapper}>
            <div  className={classes.text}>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div  className={classes.btn}>
                <button onClick={ onButtonClik }>Add posts</button>
            </div>
        </div>
    );
};
export default Send;