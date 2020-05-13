import React from "react";
import classes from "./Send.module.css"

const Send = (props) => {

    let newPostElement = React.createRef();


    const onButtonClik = () => {

        props.store.addPost();
    }
    const onPostChange = () => {
        let writePostText = newPostElement.current.value;
        props.store.updateTexteareaText(writePostText);

    }
    return (
        <div className={classes.addPostsWrapper}>
            <div  className={classes.text}>
                <textarea ref={newPostElement} onChange={onPostChange}  value={props.store.newPostText} />
            </div>
            <div  className={classes.btn}>
                <button onClick={ onButtonClik }>Add posts</button>
            </div>
        </div>
    );
};
export default Send;