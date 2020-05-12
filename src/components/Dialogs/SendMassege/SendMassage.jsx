import React from "react";
import classes from "./SendMassage.module.css"

const SendMassage = () => {

    let newPostElement = React.createRef();

    const onButtonClik = () => {
        alert (newPostElement.current.value);
    }

    return (
        <div className={classes.addMassageWrapper}>
            <div  className={classes.text}>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div  className={classes.btn}>
                <button onClick={ onButtonClik }>Add posts</button>
            </div>
        </div>
    );
};
export default SendMassage;