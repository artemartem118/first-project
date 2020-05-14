import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/Profile'
                       render={() => <Profile store={props.store}/>}/>

                <Route path='/Dialogs'
                       render={() => <Dialogs store={props.store}/>}/>

                <Route path='/News' render={() => <News/>}/>

                <Route path='/Friends' render={() => <Friends/>}/>

            </div>
        </div>
    );
}

export default App;
