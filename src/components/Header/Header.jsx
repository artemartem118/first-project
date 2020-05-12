import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.img} src={'https://cdn0.iconfinder.com/data/icons/glyphie-1/40/drum_instrument_music_rock-512.png'}/>
            <div className={classes.tect}>вне такта</div>

        </header>
    );
}
export default Header;