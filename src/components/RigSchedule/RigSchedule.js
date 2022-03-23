import React, { useState } from "react";
import "./RigSchedule.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Card,
  Button,
  Typography,
  Paper,
  Container,
  CardContent,
  CardActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material/";
import { TextField } from "@mui/material/";

function createData(Pad, Wells, Location, Afe, DirectionalInclination) {
  return { Pad, Wells, Location, Afe, DirectionalInclination };
}

const rows = [
  createData(
    "Whiskey Canyon 4 Pad",
    "Whiskey Canyon 14",
    "Almond",
    "89105",
    29
  ),
];

function RigSchedule() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginX: 4,
        marginY: 4,
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "nowrap",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "black",
      }}
    >
      <Card sx={{ marginY: 4 }}>
        <CardContent>
          <TextField
            id="pad-designation"
            label="Pad Designation"
            variant="outlined"
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </CardActions>
      </Card>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pad</TableCell>
              <TableCell align="right">Wells</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">AFE</TableCell>
              <TableCell align="right">Directional Inclination</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Pad}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Pad}
                </TableCell>
                <TableCell align="right">{row.Wells}</TableCell>
                <TableCell align="right">{row.Location}</TableCell>
                <TableCell align="right">{row.Afe}</TableCell>
                <TableCell align="right">
                  {row.DirectionalInclination}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default RigSchedule;
