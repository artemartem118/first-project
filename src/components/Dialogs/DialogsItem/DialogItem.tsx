import styles from './DialogsItem.module.scss'
import {NavLink} from 'react-router-dom'
import React from 'react'
import dialog from './../../../assets/dialog.jpg'

type Props = {
    id: number
    name: string
}

const DialogItem: React.FC<Props> = (props) => {

    return (
        <div className={styles.dialog}>
            <div className={styles.dialog__avatar}>
                <img className={styles.img} src={dialog}/>
            </div>
            <div className={styles.dialog__content}>
                <NavLink activeClassName={styles.active} to={`/dialogs/${props.id}`}>
                    {props.name}
                </NavLink>
                <div className={styles.lastMessage}>
                    Last message
                </div>
            </div>
        </div>
    )
}
export default DialogItem