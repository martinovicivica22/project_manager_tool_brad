import React from "react";
import * as FaIcons from "react-icons/fa";
import { Box } from "@mui/system";
import Chips from "../Chips/Chips";
import { Typography, Card, CardContent } from "@mui/material";


const CardKB = () => {
  return (
    <Card
      className="card"
      sx={{
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#fff",
        display: "flex",
        
        gap: "10px",
      }}
    >
      <CardContent>
        <Box
          className="card_top"
          sx={{
            display: "flex",
            gap: "5px",
            minWidth: '290px',
            flexDirection: "column",
          }}
        >
          <Box
            className="card_top_labels"
            sx={{ flexGrow: 1, display: "flex", gap: "10px" }}
          >
            <Chips />
          </Box>
          <Box sx={{ opacity: 0, transition: "200ms", ":hover": { opacity: 1 } }}>
          <FaIcons.FaEllipsisH
            
          />
          </Box>
        </Box>
        <Box className="card_title" sx={{fontWeight: 'bold' }}>Random name</Box>
        <Box className="card_footer" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography >
            <FaIcons.FaClock />
            28 March
          </Typography>
          <Typography>
            <FaIcons.FaCheck />
            1/4
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardKB;
