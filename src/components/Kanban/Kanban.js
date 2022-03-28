import { Box } from "@mui/system";

import React from "react";
import Board from "./Board";

const Kanban = () => {
  return (
    <Box
      className="main_app"
      width="100%"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        className="app_outer"
        sx={{ flexGrow: 1, width: "100%", overflowX: "auto", padding: "20px" }}
      >
        <Box
          className="app_boards"
          sx={{
            minWidth: "fit-content",
            display: "flex",
            gap: "30px",
          }}
        >
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </Box>
      </Box>
    </Box>
  );
};

export default Kanban;
