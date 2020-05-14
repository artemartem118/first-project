import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

};

rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
