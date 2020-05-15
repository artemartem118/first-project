import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import SendMessage from "./SendMessege/SendMessage";


const Dialogs = (props) => {

    const dialogsElement = props.dialogsPage.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    const messagesElement = props.dialogsPage.messagesData
        .map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs_wrapper}>

            <div className={classes.dialogs}>
                {
                    dialogsElement
                }
            </div>

            <div className={classes.messages}>
                {
                    messagesElement
                }
            </div>
            <div className={classes.sendmessage}>
                <SendMessage
                    updateTextareaMessage={props.updateTextareaMessage}
                    addMessage={props.addMessage}
                    dialogsPage={props.dialogsPage}/>
            </div>

        </div>
    );
};
export default Dialogs;