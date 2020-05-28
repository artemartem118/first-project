import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/Forms/Forms";
import React from "react";
import styles from "../../Common/Forms/Forms.module.css";



const ProfileDataForm = ({profile, ...props}) => {
    return <form onSubmit={props.handleSubmit}>
        {
            <div className={styles.formLoginError}>{props.error}</div>
        }
        <div><b>Full name</b> <Field name={"fullName"}
                                     component={Input} placeholder={"Full name"}/></div>
        <div><b>About me</b> <Field name={"aboutMe"}
                                    component={Textarea} placeholder={"About me"}/></div>
        <div><b>Looking for a job</b><Field name={"lookingForAJob"}
                                            type={"checkbox"}
                                            component={Input} /></div>
        <div><b>Looking for a job description</b><br/><Field name={"lookingForAJobDescription"}
                                                             component={Textarea} placeholder={"description"}/></div>

        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => (
            <div>
                <b>{key}</b><Field name={"contacts." + key}
                                   component={Input} placeholder={key}/>
            </div>))} </div>

        {props.ifOwner && <button onClick={props.editModeOn}> edit</button>}
        <button onClick={ ()=> {} }> save</button>
    </form>

};
const ReduxProfileDataFormForm = reduxForm({form: "profileDataForm"})(ProfileDataForm)


export default ReduxProfileDataFormForm;

