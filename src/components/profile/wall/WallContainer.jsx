import React from "react";
import Wall from "./Wall";
import {addPostActionCreator, updateTextareaPostActionCreator} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTextareaPost: (writePostText) => {
            dispatch(updateTextareaPostActionCreator(writePostText));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
}

const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall);

export default WallContainer;