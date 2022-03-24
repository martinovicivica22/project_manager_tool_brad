import { TextField } from "@mui/material";
import { TableRow, TableCell, Button } from "@mui/material";
import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <TableRow>
      <TableCell>
        <TextField
          type="text"
          required="True"
          label="Pad Designation"
          name="Pad"
          value={editFormData.Pad}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          required="True"
          label="Wells"
          name="Wells"
          value={editFormData.Wells}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          required="True"
          label="Location"
          name="Location"
          value={editFormData.Location}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          required="True"
          label="AFE"
          name="Afe"
          value={editFormData.Afe}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          required="True"
          label="Directional Inclination"
          name="DirectionalInclination"
          value={editFormData.DirectionalInclination}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EditableRow;
