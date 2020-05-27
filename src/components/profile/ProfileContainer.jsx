import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatusUser, getUser, savePhoto, updateStatusUser} from "../../redux/profilePage-reducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUser(userId);
        this.props.getStatusUser(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props}
                        ifOwner={!this.props.match.params.userId}
                        updateStatusUser={this.props.updateStatusUser}
                        userProfile={this.props.userProfile}
                        savePhoto={this.props.savePhoto}
                        status={this.props.status}/>
    }
}

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.userStatus,
    userId: state.auth.id,
    isAuth: state.auth.isAuth,
    auth: state.auth,
})


export default compose(
    connect(mapStateToProps, {getUser, getStatusUser, updateStatusUser, savePhoto}),
    withRouter
)(ProfileContainer);



