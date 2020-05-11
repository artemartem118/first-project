import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`/dialogs/${props.id}`}> {props.name} </NavLink>
        </div>
    );
};

const Massage = (props) => {
    return (
        <div className={classes.massage}>{props.massage}</div>
    );
};

const dialogsData = [
    {id: 1, name: 'Albus'},
    {id: 2, name: 'Harry'},
    {id: 3, name: 'Germiona'},
];

const massagesData = [
    {id: 1, massage: 'AVADA KEDAVRA'},
    {id: 2, massage: 'EXPILARMUS'},
    {id: 3, massage: 'FLEPENDO'},
    {id: 3, massage: 'VINGARDIUM LEVIOSSA'},
    {id: 3, massage: 'bukla'},
];
const Dialogs = () => {
    return (
        <div className={classes.dialogs_wrapper}>

            <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                </div>
            </div>

            <div className={classes.massages}>
                <Massage massage={massagesData[0].massage}/>
                <Massage massage={massagesData[1].massage}/>
                <Massage massage={massagesData[2].massage}/>
                <Massage massage={massagesData[3].massage}/>
                <Massage massage={massagesData[4].massage}/>
            </div>

        </div>
    );
};
export default Dialogs;