import { Button } from '@mui/material';

const Actions = (props)=>{
    return(
        <Button variant = 'outlined' style = {Style} >{props.title}</Button>
    )
}

const Style = {
    margin: 5,
    color: '#003b5c',
    borderColor: '#daa520'
}

export default Actions;