import React from "react";
import { Card, CardContent, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import KanBanCard from "./KanBanCard";

function KanBanBoards() {
    return (
        <Container>
            <Card>
                <CardContent>
                    <Box component='div' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', }}>
                        <TextField placeholder="Whiskey Canyon 4 Pad" variant="standard"/>
                        <KanBanCard />
                        <KanBanCard />
                        <KanBanCard />
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default KanBanBoards;