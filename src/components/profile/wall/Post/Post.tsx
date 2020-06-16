import React from 'react'
import classes from './Post.module.css'

type Props = {
    message: string
    counterLike: number
}

const Post: React.FC<Props> = React.memo((props) => {
    return (
        <div className={classes.post}>
            <div className={classes.text}>
                <div className={classes.message}>{props.message}</div>
                <div className={classes.like}>like {props.counterLike}</div>
            </div>
            <img className={classes.img}
                 src='https://avatars.mds.yandex.net/get-pdb/214908/5cf679dc-d4ef-43f0-88be-9b2a7fda87d5/s1200?webp=false'/>
        </div>
    )
})

export default Post