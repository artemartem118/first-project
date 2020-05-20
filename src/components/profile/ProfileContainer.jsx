import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUser} from "../../redux/profilePage-reducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getUser(userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = state => ({
    userProfile: state.profilePage.userProfile
})


const UrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUser})(UrlDataContainerComponent);