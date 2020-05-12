import classes from './Massage.module.css';
import React from "react";

const Massage = (props) => {

    return (
        <div className={classes.massageMY}>{props.massage}</div>
    );
};
export default Massage;