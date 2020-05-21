import React from "react";
import Dialogs from "./Dialogs";
import {addMessage, updateTextareaMessage} from "../../redux/dialogsPage-reducer";
import {connect} from "react-redux";
import {withAutnRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    withAutnRedirect,
    connect(mapStateToProps ,{updateTextareaMessage, addMessage})
)(Dialogs);