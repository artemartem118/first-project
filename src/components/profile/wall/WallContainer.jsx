import React from "react";
import Wall from "./Wall";
import {connect} from "react-redux";
import {compose} from "redux";
import {addPost} from "../../../redux/profilePage-reducer";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

export default compose(
    connect(mapStateToProps, {addPost})
)(Wall);