import React from 'react'
import Dialogs from './Dialogs'
import {actionsDialogs, InitialStateDialogs} from '../../redux/dialogsPage-reducer'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../HOC/WithAuthRedirect'
import {compose} from 'redux'
import {AppState} from '../../redux/redux-store'

const addMessage = actionsDialogs.addMessage

type MapStateProps = {
    dialogsPage: InitialStateDialogs
}
type MapDispatchProps = {
    addMessage: (text: string) => void
}

const mapStateToProps = (state: AppState): MapStateProps => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    withAuthRedirect,
    connect<MapStateProps, MapDispatchProps, null, AppState>(mapStateToProps, {addMessage})
)(Dialogs)