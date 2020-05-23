import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatusUser, getUser, updateStatusUser} from "../../redux/profilePage-reducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        console.log(this.props.auth)
        if (!userId) {
            userId = this.props.userId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUser(userId);
        this.props.getStatusUser(userId);
    }

    render() {
        return <Profile {...this.props} updateStatusUser={this.props.updateStatusUser}
                        userProfile={this.props.userProfile} status={this.props.status}/>
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
    connect(mapStateToProps, {getUser, getStatusUser, updateStatusUser}),
    withRouter
)(ProfileContainer);



