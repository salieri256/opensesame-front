import type { UserBase } from '@/types/user'
import { Button, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {
    onSubmit?: (userBase: UserBase) => void
    defaultValues?: Partial<UserBase>
}

const UserForm = (props: Props) => {
    const { register, handleSubmit } = useForm<UserBase>()
    const onSubmit: SubmitHandler<UserBase> = (userBase) => {
        if (props.onSubmit) {
            props.onSubmit(userBase)
        }
    }

    return (
        <>
            <TextField required label="Name" defaultValue={props.defaultValues?.name} {...register('name')} />
            <TextField required label="NFC ID" defaultValue={props.defaultValues?.nfcId} {...register('nfcId')} />
            <Button color="primary" variant="contained" size="large" onClick={handleSubmit(onSubmit)}>
                Submit
            </Button>
        </>
    )
}

export default UserForm