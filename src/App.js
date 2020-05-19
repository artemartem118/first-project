import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/Profile/:userId?'
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
