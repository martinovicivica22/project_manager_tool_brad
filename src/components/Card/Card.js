import React from "react";
import * as FaIcons from "react-icons/fa";
import { Box } from "@mui/system";
import Chips from "../Chips/Chips";
import { Typography } from "@mui/material";

const CardKB = () => {
  return (
    <Box
      className="card"
      sx={{
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box
        className="card_top"
        sx={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Box
          className="card_top_labels"
          sx={{ flexGrow: 1, display: "flex", gap: "10px" }}
        >
          <Chips />
        </Box>
        <FaIcons.FaEllipsisH
          sx={{ opacity: 0, transition: "200ms", ":hover": { opacity: 1 } }}
        />
      </Box>
      <Box className="card_title">Random name</Box>
      <Box className="card_footer">
        <Typography>
          <FaIcons.FaClock />
          28 March
        </Typography>
        <Typography>
          <FaIcons.FaCheck />
          1/4
        </Typography>
      </Box>
    </Box>
  );
};

export default CardKB;
