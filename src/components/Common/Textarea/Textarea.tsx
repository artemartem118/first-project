import React from 'react'
import styles from './Textarea.module.scss'

type TextareaType = {
    name: string
    placeholder: string
    register: any
}

const Textarea:React.FC<TextareaType> = ({name, register, placeholder}) => {

    return <textarea className={styles.textarea} name={name} placeholder={placeholder} ref={register} />
}
export default Textarea