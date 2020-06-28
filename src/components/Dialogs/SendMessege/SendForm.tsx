import React from 'react'
import {useForm} from 'react-hook-form'
import styles from './SendMessage.module.css'
import Textarea from '../../Common/Textarea/Textarea'
import Button from '../../Common/Button/Button'

type PropsSendMessage = {
    onSubmit: ({newMessage}: MessageDataForm, e: any) => void
}

export type MessageDataForm = {
    newMessage: string
}
const SendForm: React.FC<PropsSendMessage> = ({onSubmit}) => {

    const {register, handleSubmit, errors} = useForm<MessageDataForm>()

    const required = 'You can\'t send an empty message'

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.messageForm}>
                <div className={styles.text}>
                        <Textarea name={'newMessage'} placeholder={'New message'} register={register({
                            required,
                            maxLength: {value: 30, message: 'Exceeded the limit'}
                        })}/>
                </div>
                <div className={styles.btnWrapper}>
                    {errors.newMessage && <span className={styles.error}>{errors.newMessage.message}</span>}
                    <Button name={'Send message'}/>
                </div>
            </div>
        </form>
    )
}
export default SendForm