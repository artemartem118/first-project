import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutUser, setUserData} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {


    render() {

        return <Header logout={this.props.logoutUser}    {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default compose(
    connect(mapStateToProps, {logoutUser})
)(HeaderContainer)