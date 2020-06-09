import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import {AppState} from '../../redux/redux-store'
import {useForm} from 'react-hook-form'

type Props = {
    captchaUrl: string | null
    onSubmit: ({email, password, rememberMe, captcha}: LoginFormValues) => void
}

const LoginForm: React.FC<Props> = ({captchaUrl, onSubmit}) => {

    const {register, handleSubmit, errors} = useForm<LoginFormValues>()

    const required = 'This fields is required'

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input name='email' type='email' placeholder={'email'}
                       ref={register({required})}/>
            </div>
            {errors.email && <p>{errors.email.message}</p>}
            <div>
                <input name='password' type='password' placeholder={'password'} ref={register({required})}/>
            </div>
            {errors.password && <p>{errors.password.message}</p>}
            <div>
                <input name='rememberMe' type='checkbox' ref={register}/>Remember me
            </div>
            {captchaUrl && <> <img src={captchaUrl}/><br/> <input name={'captcha'}
                                                                  placeholder={'captcha'} ref={register}/></>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

type MapStateProps = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchProps = {
    loginUser: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValues = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: React.FC<MapStateProps & MapDispatchProps> = (props) => {

    const onSubmit = ({email, password, rememberMe, captcha}: LoginFormValues) => {
        props.loginUser(email, password, rememberMe, captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <div><h2>Login</h2></div>
            <div>
                <LoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
            </div>
        </>
    )
}

const mapStateToProps = (state: AppState): MapStateProps => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect<MapStateProps, MapDispatchProps, null, AppState>(mapStateToProps, {loginUser})(Login)