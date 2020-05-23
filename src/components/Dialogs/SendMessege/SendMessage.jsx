import React from "react";
import classes from "./SendMessage.module.css"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/Forms/Forms";
import {maxLength, required} from "../../../Utils/validators/validators";


const maxLength30 = maxLength(30)

const SendMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.text}>
                <Field component={Textarea} name={"newMessage"}  validate={[required, maxLength30]} placeholder={'enter'}/>

            </div>
            <div className={classes.btn}>
                <button >Send message</button>
            </div>
        </form>
    );
}



const SendMessageForm = reduxForm({form: "sendMessage"})(SendMessage);

const Send = (props) => {


    const onButtonClik = (data) => {

        props.addMessage(data.newMessage);

    }

    return (
        <div className={classes.addMessageWrapper}>
            <SendMessageForm onSubmit={onButtonClik} />
        </div>
    );
};
export default Send;