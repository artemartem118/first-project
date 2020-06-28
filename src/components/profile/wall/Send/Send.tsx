import React from 'react'
import styles from './Send.module.scss'
import {useForm} from 'react-hook-form'
import Textarea from '../../../Common/Textarea/Textarea'
import Button from '../../../Common/Button/Button'

type PropsSendPost = {
    onSubmit: (data: LoginFormValues, e: any) => void
}

const SendPost: React.FC<PropsSendPost> = ({onSubmit}) => {

    const {register, handleSubmit, errors} = useForm<LoginFormValues>()

    const required = 'This fields is required'

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.postForm}>
                <div className={styles.postForm__text}>
                    <Textarea name={'messageText'} placeholder={'New post'}
                              register={register({required, maxLength: {value: 20, message: 'Exceeded the limit'}})}/>
                </div>
                <div className={styles.postForm__btn}>
                    {errors.messageText && <span className={styles.error}>{errors.messageText.message}</span>}
                    <Button name={'Add post'}/>
                </div>
            </div>
        </form>
    )
}

type PropsSend = {
    addPost: (newPost: string) => void
}

type LoginFormValues = {
    messageText: string
}

const Send: React.FC<PropsSend> = (props) => {

    const addNewPost = (data: LoginFormValues, e: any) => {
        e.target.reset()
        props.addPost(data.messageText)
    }

    return <SendPost onSubmit={addNewPost}/>
}
export default Send