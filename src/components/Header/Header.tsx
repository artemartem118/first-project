import React from 'react'
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {InitialStateAuth} from "../../redux/auth-reducer";

type Props = {
    auth: InitialStateAuth
    logout: () => void
}

const Header: React.FC<Props> = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.img} src={'https://cdn0.iconfinder.com/data/icons/glyphie-1/40/drum_instrument_music_rock-512.png'}/>
            <div className={classes.tect}>вне такта</div>
            <div className={classes.login}>
                {props.auth.isAuth ?

                    <div>{props.auth.login} <button onClick={props.logout}>Log uot</button> </div>
                    : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
}
export default Header








