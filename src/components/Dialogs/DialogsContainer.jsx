import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateTextareaMessageActionCreator} from "../../redux/dialogsPage-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTextareaMessage: (value) => {
            debugger
            dispatch(updateTextareaMessageActionCreator(value));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps ,mapDispatchToProps)(Dialogs);

export default DialogsContainer;