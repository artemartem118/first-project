import React from 'react'
import SendForm, {MessageDataForm} from './SendForm'


type PropsSend = {
    addMessage: (newMessage: string) => void
}

const SendMessage: React.FC<PropsSend> = (props) => {

    const onButtonClick = ({newMessage}: MessageDataForm, e: any) => {
        e.target.reset()
        props.addMessage(newMessage)
    }

    return <SendForm onSubmit={onButtonClick}/>

}
export default SendMessage
