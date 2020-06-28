import React from 'react'
import styles from './NavBar.module.scss'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__item}>
                <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
            </div>

            <div className={styles.nav__item}>
                <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
            </div>

            <div className={styles.nav__item}>
                <NavLink to='/dialogs' activeClassName={styles.active}>Dialogs</NavLink>
            </div>

            <div className={styles.nav__item}>
                <NavLink to='/friends' activeClassName={styles.active}>Friends</NavLink>
            </div>
        </nav>
    )
}
export default Nav