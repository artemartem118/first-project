const ADD_MESSAGE = 'dialogs/ADD-MESSAGE'

type MessagesDataType = {
    id: number
    message: string
}
type DialogsDataType = {
    id: number
    name: string
}

let initialState = {
    messagesData: [
        {id: 1, message: 'AVADA KEDAVRA'},
        {id: 2, message: 'EXPILARMUS'},
        {id: 3, message: 'FLEPENDO'},
        {id: 4, message: 'VINGARDIUM LEVIOSSA'},
        {id: 5, message: 'bukla'},
    ] as Array<MessagesDataType>,

    dialogsData: [
        {id: 1, name: 'Albus'},
        {id: 2, name: 'Harry'},
        {id: 3, name: 'Germiona'},
    ] as Array<DialogsDataType>,
}
export type InitialStateDialogs = typeof initialState;

const dialogsPageReducer = (state = initialState, action: any): InitialStateDialogs => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: action.textMess}],
            };
        }
        default:
            return state;
    }
}

type AddMessageType = {
    type: typeof ADD_MESSAGE
    textMess: string
}

export const addMessage = (textMess: string): AddMessageType => ({type: ADD_MESSAGE, textMess})


export default dialogsPageReducer