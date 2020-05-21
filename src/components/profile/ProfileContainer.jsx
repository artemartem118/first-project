import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatusUser, getUser, updateStatusUser} from "../../redux/profilePage-reducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 8227;
        this.props.getUser(userId);
        this.props.getStatusUser(userId);
    }

    render() {
        return <Profile {...this.props} updateStatusUser={this.props.updateStatusUser}  userProfile={this.props.userProfile} status={this.props.status}/>
    }
}

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.userStatus
})


export default compose(
    connect(mapStateToProps, {getUser, getStatusUser, updateStatusUser}),
    withRouter
)(ProfileContainer);



