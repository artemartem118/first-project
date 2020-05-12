import React from "react";
import c from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile' activeClassName={c.active} className={c.link} >profile</NavLink>
            </div>

            <div className={c.item}>
                <NavLink to='/news' activeClassName={c.active} className={c.link} >news</NavLink>
            </div>

            <div className={c.item}>
                <NavLink to='/dialogs' activeClassName={c.active} className={c.link} >dialogs</NavLink>
            </div>

            <div className={c.item}>
                <NavLink to='/friends' activeClassName={c.active} className={c.link} >friends</NavLink>
            </div>
        </nav>
    );
};
export default Nav;