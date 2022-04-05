import React from "react";
import { Card, CardContent, TextField,  } from "@mui/material";
import { Box } from "@mui/system";

function KanBanCard() {
    return (
            <Card>
                <CardContent>
                    <Box component='div' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', }}>
                        <TextField placeholder="Hello 4 Pad" variant="standard"/>
                    </Box>
                </CardContent>
            </Card>
    )
}

export default KanBanCard;