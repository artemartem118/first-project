import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route,} from "react-router-dom";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' component={Profile}/>
                    <Route path='/Dialogs' component={Dialogs}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Friends' component={Friends}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
