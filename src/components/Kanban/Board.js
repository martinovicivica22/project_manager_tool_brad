import { Card, CardContent, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import CardKB from "../Card/Card";

import "./Board.css";

function Board() {
  return (
    <Container
      className="board"
      maxWidth="xl"
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        alignContent: "center",
        
      }}
      // display="flex"
      // flexDirection="column"
      // gap="20px"
      // height="100%"
      // width='75%'
    >
      <Card
        className="board_top"
        sx={{
          display: "flex",
        }}
      >
        <CardContent>
            <Typography
              className="board_top_title"
              sx={{
                fontSize: "1rem",
                lineHeight: "1.875rem",
                flexGrow: '1',
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              Whiskey Canyon 4 Pad
              <Box component="span" sx={{ color: "gray" }}>
                2
              </Box>
            </Typography>
            <FaIcons.FaEllipsisH />
          <Box 
          component='div'
          display='flex'
          alignItems='space-around'
          >
            <CardKB />
            <CardKB />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Board;
