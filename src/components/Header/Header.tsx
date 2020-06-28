import React from 'react'
import classes from './Header.module.scss'
import {NavLink} from 'react-router-dom'
import {InitialStateAuth} from '../../redux/auth-reducer'
import cn from 'classnames'

type Props = {
    auth: InitialStateAuth
    logout: () => void
}

const Header: React.FC<Props> = (props) => {
    return (
        <header className={cn(classes.header, 'wrapper')}>
            <div className="container">
                <div className={classes.headerWrapper}>
                    <div className={classes.header__logo}>
                        <img className={classes.img}
                             src={'https://cdn0.iconfinder.com/data/icons/glyphie-1/40/drum_instrument_music_rock-512.png'}/>
                    </div>
                    <div className={classes.header__title}><span>Вне такта</span></div>
                    <div className={cn(classes.header__login, classes.login)}>
                        {props.auth.isAuth ?
                            <div className={cn(classes.login__of, classes.of) }><span className={classes.of__name}>{props.auth.login}</span>
                                <button className={classes.of__button} onClick={props.logout}>Log uot</button>
                            </div>
                            : <div className={classes.login__on}>
                                <NavLink to={'/login'}>Login</NavLink>
                            </div>}
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header








