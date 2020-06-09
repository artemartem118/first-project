import React from 'react'
import classes from './Wall.module.css'
import Post from './Post/Post'
import {AddPostType, InitialStateProfileType} from '../../../redux/profilePage-reducer'
import Send from './Send/Send'

type Props = {
    profilePage: InitialStateProfileType
    addPost: (newPost: string) => AddPostType
}

const Wall: React.FC<Props> = (props) => {

    const postsElement = props.profilePage.postsData
        .map((p) => <Post counterLike={p.counterLike} message={p.message} key={p.id}/>)

    return (
        <div className={classes.posts}>
            <Send
                addPost={props.addPost}
            />
            <div>
                {postsElement}
            </div>
        </div>
    )
}
export default Wall