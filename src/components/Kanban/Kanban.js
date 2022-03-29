import { Box } from "@mui/system";

import React from "react";
import Board from "./Board";

const Kanban = () => {
  return (
        <Box
          className="app_boards"
          sx={{
            minWidth: "fit-content",
            display: "flex",
            flexDirection: 'column',
            padding: '20px',
            gap: "30px",
            height: '100%',
            width: '100%'
          }}
        >
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </Box>
  );
};

export default Kanban;
