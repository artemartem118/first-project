import React from "react";
import classes from "./SendMessage.module.css"

const SendMessage = (props) => {

    const changeTypedMessage = (event) => {
        const message = event.target.value;
        props.updateTextareaMessage(message)
    }

    const onButtonClik = () => {

        props.addMessage()

    }

    return (
        <div className={classes.addMessageWrapper}>
            <div className={classes.text}>
                <textarea
                    placeholder={'enter'}
                    onChange={changeTypedMessage}
                    value={props.dialogsPage.messageText}/>
            </div>
            <div className={classes.btn}>
                <button  onClick={onButtonClik}>Send message</button>
            </div>
        </div>
    );
};
export default SendMessage;