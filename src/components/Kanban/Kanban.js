import { Container } from "@mui/material";


import React from "react";
import Editable from "../Editable/Editable";
import Board from "./Board";

const Kanban = () => {
  return (
        <Container
          className="app_boards"
          sx={{
            minWidth: "100%",
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: 'center',
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
          <Editable />
        </Container>
  );
};

export default Kanban;
