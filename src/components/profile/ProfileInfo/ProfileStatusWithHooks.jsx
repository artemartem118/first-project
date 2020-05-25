import React, {useEffect, useState} from "react";


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

    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={onEditMode}>{props.status || "---"}</span>
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