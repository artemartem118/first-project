import React from "react";
import classes from "./SendMassage.module.css"
import {addMassageActionCreator, updateTextareaMessageActionCreator} from "../../../redux/dialogsPage-reducer";

const SendMassage = (props) => {
    const state = props.store.getState().dialogsPage;

    const changeTypedMassage = (event) => {
        const message = event.target.value;
        props.store.dispatch(updateTextareaMessageActionCreator(message));
    }

    const onButtonClik = () => {
        props.store.dispatch(addMassageActionCreator());
    }

    return (
        <div className={classes.addMassageWrapper}>
            <div className={classes.text}>
                <textarea
                    placeholder={'enter'}
                    onChange={changeTypedMassage}
                    value={state.massageText}/>
            </div>
            <div className={classes.btn}>
                <button  onClick={onButtonClik}>Send message</button>
            </div>
        </div>
    );
};
export default SendMassage;