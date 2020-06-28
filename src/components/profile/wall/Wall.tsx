import React from 'react'
import styles from './Wall.module.css'
import Post from './Post/Post'
import Send from './Send/Send'
import {PostDataType} from '../../../types/types'

type Props = {
    postsData: Array<PostDataType>
    addPost: (newPost: string) => void
}

const Wall: React.FC<Props> = ({postsData, addPost}) => {

    const postsElement = postsData
        .map((p) => <Post counterLike={p.counterLike} message={p.message} key={p.id}/>)

    return (
        <div className={styles.posts}>
            <div className={styles.posts__postForm}>
                <Send addPost={addPost}/>
            </div>
            <div className={styles.posts__element}>
                {postsElement}
            </div>
        </div>
    )
}
export default Wall