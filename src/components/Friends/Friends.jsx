import React from "react";
import classes from './Friends.module.css';
import * as axios from 'axios';


class Friends extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.setUsers(response.data.items));
    }

    render() {
        return(
            <div className={classes.wrapperUsers}>
                {
                    this.props.users.map((user) => {
                        return (
                            <div className={classes.wrapperUser}>
                                <div className={classes.wrapperAVA}>
                                    <div className={classes.ava}>
                                        <img src={user.photos.small}/>
                                        <div>{user.name}</div>
                                    </div>
                                    {
                                        user.follow
                                            ? <button onClick={() => {
                                                this.props.unfollow(user.id)
                                            }}>UNFOLLOW</button>
                                            : <button onClick={() => {
                                                this.props.follow(user.id)
                                            }}>FOLLOW</button>
                                    }
                                </div>
                                <div className={classes.wrapperDiscription}>
                                    <div className={classes.country}>{'user.localization.country'}</div>
                                    <div className={classes.city}>{'user.localization.city'}</div>
                                    <div className={classes.status}>{user.status}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}





export default Friends;

















