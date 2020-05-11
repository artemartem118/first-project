import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.img} src='http://cdn2.s.kolorado.ru/products/1/15/153/153181/112_1_1_design.png'/>
        </header>
    );
}
export default Header;