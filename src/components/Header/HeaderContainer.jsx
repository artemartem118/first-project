import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setUserData()
    }

    render() {

        return <Header    {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default compose(
    connect(mapStateToProps, {setUserData})
)(HeaderContainer)