import React from 'react';
import dialogsPageReducer, {addMessage} from "./dialogsPage-reducer";


let state = {
    messagesData: [
        {id: 1, message: 'AVADA KEDAVRA'},
        {id: 2, message: 'EXPILARMUS'},
        {id: 3, message: 'FLEPENDO'},
        {id: 4, message: 'VINGARDIUM LEVIOSSA'},
        {id: 5, message: 'bukla'},
    ]
};


test('added new message', () => {
    const action = addMessage("test message")
    const newState = dialogsPageReducer(state, action)

    expect(newState.messagesData.length).toBe(6);
});
