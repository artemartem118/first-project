const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXTAREA_MESSAGE = 'UPDATE-TEXTAREA-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: 'AVADA KEDAVRA'},
        {id: 2, message: 'EXPILARMUS'},
        {id: 3, message: 'FLEPENDO'},
        {id: 4, message: 'VINGARDIUM LEVIOSSA'},
        {id: 5, message: 'bukla'},
    ],
    dialogsData: [
        {id: 1, name: 'Albus'},
        {id: 2, name: 'Harry'},
        {id: 3, name: 'Germiona'},
    ],
    messageText: '',
};


const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: 6,
                message: state.messageText,
            }
            debugger
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                messageText: "",
            };
        }
        case UPDATE_TEXTAREA_MESSAGE: {
            return {
                ...state,
                messageText: action.messageText
            };
        }
        default:
            return state;
    }
};


export const addMessage = () => ({
    type: ADD_MESSAGE
});

export const updateTextareaMessage = messageText => ({
    type: UPDATE_TEXTAREA_MESSAGE,
    messageText: messageText
});

export default dialogsPageReducer;