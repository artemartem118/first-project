import React from "react";
import Dialogs from "./Dialogs";
import {addMessage, updateTextareaMessage} from "../../redux/dialogsPage-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps ,{addMessage})
)(Dialogs);