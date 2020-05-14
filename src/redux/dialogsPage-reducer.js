let initialState = {
    massagesData: [
        {id: 1, massage: 'AVADA KEDAVRA'},
        {id: 2, massage: 'EXPILARMUS'},
        {id: 3, massage: 'FLEPENDO'},
        {id: 4, massage: 'VINGARDIUM LEVIOSSA'},
        {id: 5, massage: 'bukla'},
    ],
    dialogsData: [
        {id: 1, name: 'Albus'},
        {id: 2, name: 'Harry'},
        {id: 3, name: 'Germiona'},
    ],
    massageText: '',
};

const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMassage = {
                id: 6,
                massage: state.massageText,
            }

            state.massagesData.push(newMassage);
            state.massageText = '';
            return state;
        case UPDATE_TEXTAREA_MESSAGE:
            state.massageText = action.messageText;
            return state;
        default:
            return state;
    }
};

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXTAREA_MESSAGE = 'UPDATE-TEXTAREA-MESSAGE';

export const addMassageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const updateTextareaMessageActionCreator = messageText => ({
    type: UPDATE_TEXTAREA_MESSAGE,
    messageText: messageText
});

export default dialogsPageReducer;