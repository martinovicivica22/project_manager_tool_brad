import React, { useState, Fragment, cloneElement } from "react";
import { v4 as uuidv4 } from "uuid";
import "./RigSchedule.css";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Card,
  Button,
  Typography,
  Box,
  Paper,
  Container,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material/";
import { TextField } from "@mui/material/";
import mockRigData from "../../mockRigData";
import mockData from "../../MockData";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import CardPad from "./CardPad";
import { forEach } from "lodash";
import CardRig from "./CardRig";

// the application below
function RigSchedule() {
  // destructuring with useState
  const [rigData, setRigData] = useState(mockData);
  const [addFormData, setAddFormData] = useState({
    Pad: "",
    Wells: "",
    Location: "",
    Afe: "",
    DirectionalInclination: "",
  });

  const [editFormData, setEditFormData] = useState({
    Pad: "",
    Wells: "",
    Location: "",
    Afe: "",
    DirectionalInclination: "",
  });

  const [editRigDataId, setEditRigDataId] = useState(null);

  const handleAddDataChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newAddData = { ...addFormData };
    newAddData[fieldName] = fieldValue;

    setAddFormData(newAddData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddDataSubmit = (event) => {
    event.preventDefault();

    const newRigData = {
      id: uuidv4(),
      Pad: addFormData.Pad,
      Wells: addFormData.Wells,
      Location: addFormData.Location,
      Afe: addFormData.Afe,
      DirectionalInclination: addFormData.DirectionalInclination,
    };

    const newAddRigData = [...rigData, newRigData];
    setRigData(newAddRigData);
  };

  const handleEditformSubmit = (event) => {
    event.preventDefault();

    const editedRigData = {
      id: editRigDataId,
      Pad: editFormData.Pad,
      Wells: editFormData.Wells,
      Location: editFormData.Location,
      Afe: editFormData.Afe,
      DirectionalInclination: editFormData.DirectionalInclination,
    };

    const newAddRigData = [...rigData];

    const index = rigData.findIndex((data) => data.id === editRigDataId);

    newAddRigData[index] = editedRigData;

    setRigData(newAddRigData);
    setEditRigDataId(null);
  };

  const handleEditClick = (event, data) => {
    event.preventDefault();

    setEditRigDataId(data.id);

    const formValues = {
      Pad: data.Pad,
      Wells: data.Wells,
      Location: data.Location,
      Afe: data.Afe,
      DirectionalInclination: data.DirectionalInclination,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditRigDataId(null);
  };

  const handleDeleteClick = (rigDataId) => {
    const newRigData = [...rigData];

    const index = rigData.findIndex((data) => data.id === rigDataId);

    newRigData.splice(index, 1);

    setRigData(newRigData);
  };

  const padArray = mockRigData.map(pad => pad.Pad)
  const uniquePads = [...new Set(padArray)]
  
  const groupWellsByPad = (mockRigData) => Object.values(mockRigData.reduce((mockRigData, {Pad, Well_name}) => {
    if (mockRigData[Pad]) mockRigData[Pad].Well_name.push(Well_name);
    else mockRigData[Pad] = {Pad, Well_name: [Well_name]};
    return mockRigData
  }, []))
  
  const wellsByPad = groupWellsByPad(mockRigData);

  // const padEmpty = [];
  // for(var i=0;i<uniquePads.length;i++){
  //   padEmpty.push(<Box component='div' sx={{display: 'flex', padding: '10px'}}><CardPad value={ uniquePads[i] }>
  //     </CardPad></Box>)
  // }
  
  
//   function findObjectByLabel(obj, label) {
//     for(var elements in obj){
//         if (elements === label){
//              console.log(obj[elements]);
//         }
//          if(typeof obj[elements] === 'object'){
//          findObjectByLabel(obj[elements], 'Well_name');
//         }
       
//     }
// };

  console.log(wellsByPad)
  console.log(uniquePads)
  console.log(wellsByPad[0].Well_name)
  
  // console.log(wellsByPad[0].Pad)

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
          <Box component="form" onSubmit={handleAddDataSubmit}>
            <TextField
              sx={{ paddingX: 1 }}
              id="Pad"
              name="Pad"
              type="text"
              label="Pad Designation"
              variant="outlined"
              margin="normal"
              onChange={handleAddDataChange}
            />
            <TextField
              sx={{ paddingX: 1 }}
              id="Wells"
              name="Wells"
              type="text"
              label="Wells"
              variant="outlined"
              margin="normal"
              onChange={handleAddDataChange}
            />
            <TextField
              sx={{ paddingX: 1 }}
              id="Location"
              name="Location"
              type="text"
              label="Location"
              variant="outlined"
              margin="normal"
              onChange={handleAddDataChange}
            />
            <TextField
              sx={{ paddingX: 1 }}
              id="Afe"
              name="Afe"
              type="text"
              label="AFE"
              variant="outlined"
              margin="normal"
              onChange={handleAddDataChange}
            />
            <TextField
              sx={{ paddingX: 1 }}
              id="DirectionalInclination"
              name="DirectionalInclination"
              type="text"
              label="Directional Inclination"
              variant="outlined"
              margin="normal"
              onChange={handleAddDataChange}
            />
            <Button
              sx={{ marginTop: 2, padding: 1 }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* <form sx={{ minWidth: 650 }} onSubmit={handleEditformSubmit}> */}
      {/* <Card sx={{ minWidth: 1300, backgroundColor: "#919191" }}>
        <CardContent>
          <Box component="form" onSubmit={handleEditformSubmit}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "orange" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Pad Designation
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Wells
                    </TableCell>
                    <TableCell align="right">Location</TableCell>
                    <TableCell align="right">AFE</TableCell>
                    <TableCell align="right">Directional Inclination</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rigData.map((data) => (
                    <Fragment>
                      {editRigDataId === data.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadOnlyRow
                          data={data}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                        />
                      )}
                    </Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </CardContent>
      </Card> */}
      {/* return Cards instead of Table */}
      <Container>
          {wellsByPad.map(item => <Box component='div' sx={{display: 'flex', padding: '10px'}}><CardPad value={item.Pad}></CardPad></Box>)}
          {/* {padEmpty} */}
          {/* {uniquePads.map(item => <Box component='div' sx={{display: 'flex', padding: '10px'}}><CardPad value={item}>
            </CardPad></Box>)} */}
      </Container>
      {/* </form> */}
    </Container>
  );
}

export default RigSchedule;
