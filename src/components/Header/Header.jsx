import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.img} src={'https://cdn0.iconfinder.com/data/icons/glyphie-1/40/drum_instrument_music_rock-512.png'}/>
            <div className={classes.tect}>вне такта</div>
            <div className={classes.login}>
                {props.auth.isAuth ? props.auth.login : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    );
}
export default Header;