import classes from './Message.module.css'
import React from 'react'

type Props = {
    message: string
}

const Message: React.FC<Props> = (props) => {

    return (
        <div className={classes.message}>{props.message}</div>
    )
}
export default Message