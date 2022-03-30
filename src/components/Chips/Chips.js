import { Chip } from "@mui/material";

import React from "react";
import * as AiIcons from "react-icons/ai";

const Chips = (props) => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Chip
      className="chip"
      size='small'
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        padding: "4px 8px",
        borderRadius: "40px",
        fontSize: "14px",
        width: "fit-content",
        backgroundColor: "orange",
      }}
      label="Almond"
      color="primary"
      onDelete={handleDelete}
      deleteIcon={<AiIcons.AiOutlineClose />}
    >
      {props.text}
    </Chip>
  );
};

export default Chips;
