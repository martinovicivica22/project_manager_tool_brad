import { Card, CardContent, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KanBanBoards from "./KanBanBoards";

function KanBanMain() {
    return (
        <Container
        maxWidth="xl"
        sx={{
        marginX: 4,
        marginY: 4,
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        alignContent: "center",
        backgroundColor: "black",
        }}
        >
            <Container>
                <Box sx={{display: 'flex', padding: '10px', }}>
                    <KanBanBoards />
                </Box>
                <Box sx={{display: 'flex', padding: '10px', }}>
                    <KanBanBoards />
                </Box>

            </Container>
        </Container>
    )
}

export default KanBanMain;