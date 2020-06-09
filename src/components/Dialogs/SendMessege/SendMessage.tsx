import React from 'react'
import classes from './SendMessage.module.css'
import {useForm} from 'react-hook-form'

type PropsSendMessage = {
    onSubmit: ({newMessage}: FormData, e: any) => void
}

type FormData = {
    newMessage: string
}
const SendMessage: React.FC<PropsSendMessage> = ({onSubmit}) => {

    const {register, handleSubmit, errors} = useForm<FormData>()

    const required = 'You can\'t send an empty message'

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.text}>
                <div>
                    <textarea name='newMessage' placeholder={'New message'}
                              ref={register({required, maxLength: {value: 30, message: 'Exceeded the limit'}})}/>
                </div>

            </div>
            <div className={classes.btn}>
                <button>Send message</button>
                {errors.newMessage && <span>{errors.newMessage.message}</span>}
            </div>
        </form>
    )
}

type PropsSend = {
    addMessage: (newMessage: string) => void
}

const Send: React.FC<PropsSend> = (props) => {

    const {reset} = useForm()

    const onButtonClik = ({newMessage}: FormData, e: any) => {
        e.target.reset()
        props.addMessage(newMessage)
    }

    return (
        <div className={classes.addMessageWrapper}>
            <SendMessage onSubmit={onButtonClik}/>
        </div>
    )
}
export default Send
