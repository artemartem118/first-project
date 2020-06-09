import React, {Suspense} from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import News from './components/News/News'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/App-reducer'
import Preloader from './components/Common/Preloader/Preloader'

const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Switch>
                            <Route path='/Profile/:userId?'
                                   render={() => <ProfileContainer/>}/>

                            <Route path='/Dialogs'
                                   render={() => <DialogsContainer/>}/>

                            <Route path='/News' render={() => <News/>}/>

                            <Route path='/Friends' render={() => <FriendsContainer/>}/>
                            <Route path='/Login' render={() => <Login/>}/>
                            <Redirect form={'/'} to={'/profile'}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})


export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App)
