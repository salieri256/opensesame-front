import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import ModeIcon from '@mui/icons-material/Mode'


const ButtonOutline = styled(Button)({
    border: '1.5px solid lightgray',
    color: 'black'
})

const EditButton = () => {
    return (
        <ButtonOutline>
            <ModeIcon />
        </ButtonOutline>
    )
}

export default EditButton