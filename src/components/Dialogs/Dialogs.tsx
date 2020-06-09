import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem'
import Message from './Message/Message'
import SendMessage from './SendMessege/SendMessage'
import {InitialStateDialogs} from '../../redux/dialogsPage-reducer'


type Props = {
    dialogsPage: InitialStateDialogs
    addMessage: () => void
}

const Dialogs = (props: Props) => {

    const dialogsElement = props.dialogsPage.dialogsData
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesElement = props.dialogsPage.messagesData
        .map(m => <Message key={m.id} message={m.message}/>)


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
                    addMessage={props.addMessage}/>
            </div>

        </div>
    )
}
export default Dialogs