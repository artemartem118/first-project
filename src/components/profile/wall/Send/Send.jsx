import React from "react";
import classes from "./Send.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../Utils/validators/validators";
import {Textarea} from "../../../Common/Forms/Forms";


const maxLength30 = maxLength(30);


const SendPost = (props) => {



    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.text}>
                <Field component={Textarea}
                       validate={[required, maxLength30]}
                       placeholder={'enter'} name={'messageText'}/>

            </div>
            <div className={classes.btn}>
                <button>Add posts</button>
            </div>
        </form>
    );
}


const ReduxLoginForm = reduxForm({form: "SendPost"})(SendPost)


const Send = (props) => {

    const addNewPost = (data) => {
        props.addPost(data.messageText);
    }

    return (
        <div className={classes.addPostsWrapper}>
            <ReduxLoginForm  onSubmit={addNewPost}/>
        </div>
    );
};
export default Send;