import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth-reducer";
import {Input} from "../Common/Forms/Forms";
import {required} from "../../Utils/validators/validators";
import {Redirect} from "react-router-dom";
import styles from "../Common/Forms/Forms.module.css"


const LoginForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"}
                       validate={[required]}
                       component={Input} placeholder={"email"}/>
            </div>
            <div>
                <Field name={"password"}
                       type={"password"}
                       validate={[required]}
                       component={Input} placeholder={"password"}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={Input} type={"checkbox"}/>remember me
            </div>
            {
                <div className={styles.formLoginError}>{props.error}</div>
            }
            <div>
                <button>login</button>
            </div>
        </form>
    );
}

const ReduxLoginForm = reduxForm({form: "login"})(LoginForm)


const Login = (props) => {

    const onSubmit = ({email, password, rememberMe}) => {
        props.loginUser(email, password, rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <>
            <div><h2>Login</h2></div>
            <div>
                <ReduxLoginForm onSubmit={onSubmit}/>
            </div>
        </>
    );
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginUser})(Login);