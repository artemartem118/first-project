import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'
import {AppState} from '../../redux/redux-store'
import {useForm} from 'react-hook-form'
import styles from './Login.module.css'

type Props = {
    captchaUrl: string | null
    onSubmit: ({email, password, rememberMe, captcha}: LoginFormValues) => void
}

const LoginForm: React.FC<Props> = ({captchaUrl, onSubmit}) => {

    const {register, handleSubmit, errors} = useForm<LoginFormValues>()

    const required = 'This fields is required'

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrapperInput}>
                <input className={styles.inputLogin} name='email' type='email' placeholder={'email'}
                       ref={register({required})}/>
                {errors.email && <div className={styles.error}>{errors.email.message}</div>}
            </div>
            <div className={styles.wrapperInput}>
                <input className={styles.inputLogin} name='password' type='password' placeholder={'password'} ref={register({required})}/>
                {errors.password && <div className={styles.error}>{errors.password.message}</div>}
            </div>
            <div>
                <label className={styles.labelChack} htmlFor='loginCheck'>
                    <input id='loginCheck' name='rememberMe' className={styles.checkbox} type='checkbox' ref={register}/>
                    <span className={styles.fakeChack}></span>
                    <span className={styles.textLabel}>Remember me</span>
                </label>
            </div>
            {captchaUrl && <> <img src={captchaUrl}/><br/> <input name={'captcha'}
                                                                  placeholder={'captcha'} ref={register}/></>}
            <div>
                <button className={styles.buttonLogin} >login</button>
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
        <div className={styles.outerWrapperLogin}>
            <div className={styles.innerWrapperLogin}>
                <div><h3>Login</h3></div>
                <div>
                    <LoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState): MapStateProps => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect<MapStateProps, MapDispatchProps, null, AppState>(mapStateToProps, {loginUser})(Login)