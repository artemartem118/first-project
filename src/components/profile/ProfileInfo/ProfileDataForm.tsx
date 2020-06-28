import React from 'react'
import {UserProfileType} from '../../../types/types'
import {useForm} from 'react-hook-form'
import Button from '../../Common/Button/Button'

type FormData = UserProfileType

type LoginFormOwnProps = {
    profile: UserProfileType | null
    onSubmit: (formData: FormData) => void
}

const ProfileDataForm: React.FC<LoginFormOwnProps> = ({profile, onSubmit}) => {

    const {register, handleSubmit, errors} = useForm<FormData>()


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><b>Full name</b> <input defaultValue={profile?.fullName} name='fullName' type='text'
                                         placeholder={'Full name'}
                                         ref={register({maxLength: {value: 20, message: 'Exceeded the limit'}})}/>
                {errors.fullName && <p>{errors.fullName.message}</p>}
            </div>
            <div><b>About me</b> <input defaultValue={profile?.aboutMe} name='aboutMe' type='text'
                                        placeholder={'Full name'}
                                        ref={register({maxLength: {value: 20, message: 'Exceeded the limit'}})}/>
                {errors.aboutMe && <p>{errors.aboutMe.message}</p>}
            </div>
            <div><b>Looking for a job</b> <input name={'lookingForAJob'} type='checkbox'
                                                 ref={register({
                                                     maxLength: {value: 20, message: 'Exceeded the limit'}
                                                 })}/>
                {errors.lookingForAJob && <p>{errors.lookingForAJob.message}</p>}
            </div>
            <div><b>Looking for a job description</b><br/> <textarea defaultValue={profile?.lookingForAJobDescription}
                                                                     name='lookingForAJobDescription'
                                                                     placeholder={'Looking for a job description'}
                                                                     ref={register({
                                                                         maxLength: {
                                                                             value: 20,
                                                                             message: 'Exceeded the limit'
                                                                         }
                                                                     })}/>
                {errors.lookingForAJobDescription && <p>{errors.lookingForAJobDescription.message}</p>}
            </div>
            <div><b>Contacts:</b> {profile && Object.keys(profile.contacts).map(key => (
                <div key={key}>
                    <b>{key}</b> <input name={'contacts.' + key} placeholder={key} type="text"
                                        ref={register({maxLength: {value: 20, message: 'Exceeded the limit'}})}/>
                </div>))} </div>
            <Button name={'Save'}/>
        </form>
    )
}

export default ProfileDataForm

