import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {

    return (
        <div className={classes.dialog} activeClassName={classes.active}>
            <div className={classes.pic}><img
                src={'https://avatars.mds.yandex.net/get-zen_doc/1362956/pub_5bf63a4d77663700aaa65737_5bf63cbcd238aa00aac52f5b/scale_1200'}/>
            </div>
            <div className={classes.dlink}>
                <NavLink className={classes.link}
                         to={`/dialogs/${props.id}`}> {props.name} </NavLink>
            </div>
            <div className={classes.lastmassage}>
                last massage
            </div>
        </div>
    );
};
export default DialogItem;