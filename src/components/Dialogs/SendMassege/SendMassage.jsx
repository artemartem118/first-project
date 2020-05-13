import React from "react";
import classes from "./SendMassage.module.css"

const SendMassage = (props) => {

    let newPostElement = React.createRef();

    const changeTypedMassage = () => {
        const message = newPostElement.current.value;
        props.store.updateTexteareaMessage(message);
    }

    const onButtonClik = () => {
        props.store.addNewMassage();
    }

    return (
        <div className={classes.addMassageWrapper}>
            <div  className={classes.text}>
                <textarea
                    onChange={changeTypedMassage}
                    ref={newPostElement}
                    value={props.store.massageText}></textarea>
            </div>
            <div  className={classes.btn}>
                <button onClick={ onButtonClik }>Add posts</button>
            </div>
        </div>
    );
};
export default SendMassage;