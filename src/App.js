import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/Profile'
                       render={() => <ProfileContainer/>}/>

                <Route path='/Dialogs'
                       render={() => <DialogsContainer/>}/>

                <Route path='/News' render={() => <News/>}/>

                <Route path='/Friends' render={() => <FriendsContainer/>}/>

            </div>
        </div>
    );
}

export default App;
