import React from 'react'
import classes from './Send.module.css'
import {useForm} from 'react-hook-form'

type PropsSendPost = {
    onSubmit: (data: LoginFormValues, e: any) => void
}

const SendPost: React.FC<PropsSendPost> = ({onSubmit}) => {

    const {register, handleSubmit, errors} = useForm<LoginFormValues>()

    const required = 'This fields is required'

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.text}>
                <textarea name='messageText' placeholder={'New post'}
                          ref={register({required, maxLength: {value: 20, message: 'Exceeded the limit'}})}/>
                {errors.messageText && <div className={classes.error}>{errors.messageText.message}</div>}
            </div>
            <div className={classes.btnEnd}>
                <button className={classes.btn}>Add post</button>
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

    const {reset} = useForm()

    const addNewPost = (data: LoginFormValues, e: any) => {
        e.target.reset()
        props.addPost(data.messageText)
    }

    return (
        <div className={classes.addPostsWrapper}>

            <SendPost onSubmit={addNewPost}/>
        </div>
    )
}
export default Send