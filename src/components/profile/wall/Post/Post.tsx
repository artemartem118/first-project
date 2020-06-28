import React from 'react'
import styles from './Post.module.scss'
import myGirlfriend from '../../../../assets/myGirlfriend.jpg'
import cn from 'classnames'

type Props = {
    message: string
    counterLike: number
}

const Post: React.FC<Props> = React.memo((props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post__img}>
                <img className={styles.img}
                     src={myGirlfriend} alt={'my girlfriend'}/>
            </div>
            <div className={cn(styles.post__content, styles.content)}>
                <div className={styles.content__message}>{props.message}</div>
                <div className={styles.content__like}>like {props.counterLike}</div>
            </div>
        </div>
    )
})

export default Post
