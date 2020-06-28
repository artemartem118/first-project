import React from 'react'
import styles from './Header.module.scss'
import {NavLink} from 'react-router-dom'
import {InitialStateAuth} from '../../redux/auth-reducer'
import cn from 'classnames'
import Button from '../Common/Button/Button'
import logo from '../../assets/logo.png'

type Props = {
    auth: InitialStateAuth
    logout: () => void
}

const Header: React.FC<Props> = (props) => {
    return (
        <header className={cn(styles.header, 'wrapper')}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.header__logo}>
                        <img className={styles.img}
                             src={logo} alt={'logo'}/>
                    </div>
                    <div className={styles.header__title}><span>Vnetakta</span></div>
                    <div className={cn(styles.header__login, styles.login)}>
                        {props.auth.isAuth ?
                            <div className={cn(styles.login__of, styles.of)}>
                                <span className={styles.of__name}>
                                    {props.auth.login}
                                </span>
                                <div className={styles.of__button}>
                                    <Button name={'Log uot'} handleClick={props.logout}/>
                                </div>
                            </div>
                            : <div className={styles.login__on}>
                                <NavLink to={'/login'}>Login</NavLink>
                            </div>}
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header








