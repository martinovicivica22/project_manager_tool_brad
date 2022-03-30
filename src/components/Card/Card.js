import React from "react";
import * as FaIcons from "react-icons/fa";
import { Box } from "@mui/system";
import Chips from "../Chips/Chips";
import { Typography, Card, CardContent } from "@mui/material";


const CardKB = () => {
  return (
    <Card
      className="card"
      variant="outlined"
      sx={{
        padding: "0px",
        margin: '2px',
        borderRadius: "5px",
        backgroundColor: "#fff",
        minWidth: 290,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardContent>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box
            className="card_top_labels">
            <Chips />
          </Box>
          <Box sx={{ opacity: 0, transition: "200ms", ":hover": { opacity: 1 } }}>
            <FaIcons.FaEllipsisH/>
          </Box>
        </Box>
        <Box className="card_title" sx={{paddingY: '20px',}}>
          <Typography sx={{fontWeight: 'bold' }}>Whiskey Canyon 14</Typography>
        </Box>
        <Box className="card_footer" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', alignContent: 'flex-end',}}>
          <Typography sx={{ fontSize: '12px',}}>
            <FaIcons.FaClock size='12px'/>
            28 March
          </Typography>
          <Typography sx={{ fontSize: '12px'}}>
            <FaIcons.FaCheck size='12px'/>
            1/4
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardKB;
