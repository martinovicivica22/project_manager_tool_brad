import { Card, CardActions, CardContent, TextField, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import * as AiIcons from "react-icons/ai";

function Editable(props) {
    const [showEdit, setShowEdit] = useState(false)
    return (
        <Card 
        sx={{maxHeight: 'fit-content',
            display: 'flex',
            margin: '2px',
            borderRadius: "5px",
            }}
            >
            { !showEdit ? (
                <CardContent>
                    <Box>
                        <Typography sx={{ ":hover": {cursor: 'pointer'}, paddingX: '75px'}} onClick={()=>setShowEdit(true)}>+ Add Card</Typography>
                    </Box>
                </CardContent>
                ) : (
                <CardContent>
                    <CardActions>
                        <Box 
                        component='form' 
                        onSubmit={(event)=> {
                            event.preventDefault()
                            if(props.onSubmit)props.onSubmit()
                        }}>
                            <Box sx={{display: 'flex', justifyContent: 'center', }}>
                            <TextField type='text' defaultValue={props.text} label='Well name' sx={{ padding: '2px'}}>Well name</TextField>
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'flex-start',}}>
                            <Button type='submit' variant='outlined' color='primary' sx={{height: '24px', margin: '2px'}}>{props.ButtonText || 'Add'}</Button>
                            <Button type='button' variant='outlined' color='error' sx={{height: '24px', margin: '2px'}} onClick={()=>setShowEdit(false)}>
                                <AiIcons.AiOutlineClose />
                            </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </CardContent>  
            )}
        </Card>
    )
}

export default Editable