const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

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
};


const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: 6,
                message: action.textMess,
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            };
        }
        default:
            return state;
    }
};


export const addMessage = (textMess) => ({type: ADD_MESSAGE, textMess});


export default dialogsPageReducer;