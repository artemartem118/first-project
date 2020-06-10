import React from 'react'
import classes from './Wall.module.css'
import Post from './Post/Post'
import {AddPostType} from '../../../redux/profilePage-reducer'
import Send from './Send/Send'
import {PostDataType} from '../../../types/types'

type Props = {
    postsData: Array<PostDataType>
    addPost: (newPost: string) => AddPostType
}

const Wall: React.FC<Props> = ({postsData, addPost}) => {

    const postsElement = postsData
        .map((p) => <Post counterLike={p.counterLike} message={p.message} key={p.id}/>)

    return (
        <div className={classes.posts}>
            <Send
                addPost={addPost}
            />
            <div>
                {postsElement}
            </div>
        </div>
    )
}
export default Wall