import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/Profile'
                       render={() => <Profile/>}/>

                <Route path='/Dialogs'
                       render={() => <DialogsContainer/>}/>

                <Route path='/News' render={() => <News/>}/>

                <Route path='/Friends' render={() => <Friends/>}/>

            </div>
        </div>
    );
}

export default App;
