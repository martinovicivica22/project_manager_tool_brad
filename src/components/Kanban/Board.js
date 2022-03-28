import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import CardKB from "../Card/Card";

import "./Board.css";

function Board() {
  return (
    <Box
      className="board"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100%",
      }}
    >
      <Box
        className="board_top"
        sx={{
          display: "flex",
        }}
      >
        <Typography
          className="board_top_title"
          sx={{
            fontSize: "1rem",
            lineHeight: "1.875rem",
            flexGrow: 1,
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
          className="board_cards"
          sx={{
            backgroundColor: "#f8f8f8",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
            borderBottom: "10px",
          }}
        >
          <CardKB />
          <CardKB />
        </Box>
      </Box>
    </Box>
  );
}

export default Board;
