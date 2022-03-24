import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <TableRow
      key={data.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {data.Pad}
      </TableCell>
      <TableCell align="right">{data.Wells}</TableCell>
      <TableCell align="right">{data.Location}</TableCell>
      <TableCell align="right">{data.Afe}</TableCell>
      <TableCell align="right">{data.DirectionalInclination}</TableCell>
      <TableCell align="right">
        <Button type="button" onClick={(event) => handleEditClick(event, data)}>
          Edit
        </Button>
        <Button type="button" onClick={() => handleDeleteClick(data.id)}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ReadOnlyRow;
