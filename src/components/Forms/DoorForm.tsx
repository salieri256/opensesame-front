import type { DoorBase } from '@/types/door'
import { Button, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {
    onSubmit?: (userBase: DoorBase) => void
    defaultValues?: Partial<DoorBase>
}

const DoorForm = (props: Props) => {
    const { register, handleSubmit } = useForm<DoorBase>()
    const onSubmit: SubmitHandler<DoorBase> = (doorBase) => {
        if (props.onSubmit) {
            props.onSubmit(doorBase)
        }
    }

    return (
        <>
            <TextField required label="Name" defaultValue={props.defaultValues?.name} {...register('name')} />
            <Button color="primary" variant="contained" size="large" onClick={handleSubmit(onSubmit)}>
                Submit
            </Button>
        </>
    )
}

export default DoorForm