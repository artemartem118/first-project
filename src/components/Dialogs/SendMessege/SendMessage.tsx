import React from 'react'
import classes from './SendMessage.module.css'
import {Field, reduxForm} from 'redux-form'
import {Textarea} from '../../Common/Forms/Forms'
import {maxLength, required} from '../../../Utils/validators/validators'

type PropsSendMessage = {
    handleSubmit: () => void
    onSubmit: () => void
}

type PropsSend = {
    addMessage: (newMessage: string) => void
}

type FormData = {
    newMessage: string
}

const maxLength30 = maxLength(30)

const SendMessage: React.FC<PropsSendMessage> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.text}>
                <Field component={Textarea} name={"newMessage"}  validate={[required, maxLength30]} placeholder={'enter'}/>

            </div>
            <div className={classes.btn}>
                <button >Send message</button>
            </div>
        </form>
    )
}
{/* @ts-ignore*/}
const SendMessageForm = reduxForm({form: "sendMessage"})(SendMessage);

const Send: React.FC<PropsSend> = (props) => {

    const onButtonClik = ({newMessage}: FormData) => {

        props.addMessage(newMessage);

    }

    return (
        <div className={classes.addMessageWrapper}>
    {/* @ts-ignore*/}
            <SendMessageForm onSubmit={onButtonClik} />
        </div>
    );
};
export default Send
