import React from "react";
import classes from "./Send.module.css"
import {addPostActionCreator, updateTextareaPostActionCreator} from "../../../../redux/profilePage-reducer";

const Send = (props) => {

    const state = props.store.getState().profilePage;

    const onButtonClik = () => {

        props.store.dispatch(addPostActionCreator());
    }
    const onPostChange = (event) => {
        let writePostText = event.target.value;
        props.store.dispatch(updateTextareaPostActionCreator(writePostText));

    }
    return (
        <div className={classes.addPostsWrapper}>
            <div  className={classes.text}>
                <textarea
                    placeholder={'enter'}
                    onChange={onPostChange}  value={state.newPostText} />
            </div>
            <div  className={classes.btn}>
                <button onClick={ onButtonClik }>Add posts</button>
            </div>
        </div>
    );
};
export default Send;