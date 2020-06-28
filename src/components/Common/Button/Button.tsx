import React from 'react'

import styles from './Button.module.scss'

type ButtonType = {
    name: string
    handleClick?: () => void
    forDisabled?: boolean
}

const Button:React.FC<ButtonType> = ({forDisabled ,name, handleClick}) => {

    return (
        <button disabled={forDisabled} className={styles.button} onClick={handleClick}>{name}</button>
    )
}
export default Button