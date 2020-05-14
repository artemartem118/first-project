import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Massage from "./Massage/Massage";
import SendMassage from "./SendMassege/SendMassage";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage
    const dialogsElement = state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    const massagesElement = state.massagesData
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
                <SendMassage
                    store={props.store}/>
            </div>

        </div>
    );
};
export default Dialogs;