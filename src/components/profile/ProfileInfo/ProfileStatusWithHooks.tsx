import React, {useEffect, useState} from 'react'
import classes from './ProfileInfo.module.css'
import {ThunkActionProfileType} from '../../../redux/profilePage-reducer'

type Props = {
    status: string
    updateStatusUser: (status: string) => ThunkActionProfileType
    ifOwner: boolean
}

const ProfileStatusWithHooks: React.FC<Props> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        props.updateStatusUser(status)
    }

    const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    if (!props.ifOwner)
        return <span>{props.status || '---'}</span>

    return (
        <>

            {!editMode &&
            <div>
                <span className={classes.status} onDoubleClick={onEditMode}>{props.status || '---'}</span>
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

export default ProfileStatusWithHooks