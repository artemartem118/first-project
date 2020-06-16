import React from 'react'
import styles from './Preloader.module.css'

type props = {}
const Preloader = (props: props) => {

    return (
        <div className={styles.wrapperPreloader}>
            <div className={styles.ldsSpinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Preloader