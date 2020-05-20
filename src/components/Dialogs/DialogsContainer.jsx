import React from "react";
import Dialogs from "./Dialogs";
import {addMessage, updateTextareaMessage} from "../../redux/dialogsPage-reducer";
import {connect} from "react-redux";
import {withAutnRedirect} from "../HOC/WithAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}



const DialogsContainer = withAutnRedirect(connect(mapStateToProps ,{updateTextareaMessage, addMessage})(Dialogs));

export default DialogsContainer;