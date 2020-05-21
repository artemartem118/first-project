import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {


    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field name={"login"} component={"input"} placeholder={"login"}/>
            </div>
            <div>
                <Field name={"password"} component={"input"} placeholder={"password"}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"}/>remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    );
}

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm)


const Login = (props) => {

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <div><h2>Login</h2></div>
            <div>
                <ReduxLoginForm onSubmit={ onSubmit } />
            </div>
        </>
    );
}


export default Login;