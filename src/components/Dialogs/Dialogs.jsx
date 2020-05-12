import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Massage from "./Massage/Massage";
import SendMassage from "./SendMassege/SendMassage";


const Dialogs = (props) => {

    const dialogsElement = props.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    const massagesElement = props.massagesData
        .map(m => <Massage massage={m.massage}/>);

    return (
        <div className={classes.dialogs_wrapper}>

            <div className={classes.dialogs}>
                {
                    dialogsElement
                }
            </div>

            <div className={classes.massages}>
                {
                    massagesElement
                }
            </div>
            <div className={classes.sendmassage}>
                <SendMassage/>
            </div>

        </div>
    );
};
export default Dialogs;