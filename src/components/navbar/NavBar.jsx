import React from "react";
import c from './NavBar.module.css';

const Nav = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}><a className={c.active} href=''>profile</a></div>
            <div className={c.item}><a>news</a></div>
            <div className={c.item}><a>massage</a></div>
            <div className={c.item}><a>friends</a></div>
        </nav>
    );
};
export default Nav;