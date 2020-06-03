import React, {useEffect, useState} from 'react'
import classes from './ProfileInfo.module.css'


const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    const onEditMode = () => {
        setEditMode(true);
    }
    const offEditMode = () => {
        setEditMode(false);
        props.updateStatusUser(status);
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    if (!props.ifOwner)
    return <span>{props.status || "---"}</span>

    return (
        <>

            {!editMode &&
            <div>
                <span className={classes.status} onDoubleClick={onEditMode}>{props.status || "---"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onChangeStatus} autoFocus={true} onBlur={offEditMode}
                       value={status}/>
            </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;