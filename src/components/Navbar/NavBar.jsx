import React from "react";
import c from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile' activeClassName={c.active} >profile</NavLink>
            </div>

            <div className={c.item}>
                <NavLink to='/news' activeClassName={c.active} >news</NavLink>
            </div>

            <div className={c.item}>
                <NavLink to='/dialogs' activeClassName={c.active} >dialogs</NavLink>
            </div>

            <div className={c.item}>
                <NavLink to='/friends' activeClassName={c.active} >friends</NavLink>
            </div>
        </nav>
    );
};
export default Nav;