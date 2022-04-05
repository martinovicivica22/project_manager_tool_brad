import { Card, CardContent, Container, Typography, Box } from "@mui/material";
import CardRig from "./CardRig";
import mockRigData from "../../mockRigData";
const groupWellsByPad = (mockRigData) => Object.values(mockRigData.reduce((mockRigData, {Pad, Well_name}) => {
    if (mockRigData[Pad]) mockRigData[Pad].Well_name.push(Well_name);
    else mockRigData[Pad] = {Pad, Well_name: [Well_name]};
    return mockRigData
  }, []))
  
  const padArray = mockRigData.map(pad => pad.Pad)
  const uniquePads = [...new Set(padArray)]
  const wellsByPad = groupWellsByPad(mockRigData);
  const pad1Wells = wellsByPad[0].Well_name;
  const pad1 = wellsByPad[0].Pad;
  const pad2 = wellsByPad[1].Pad;


function CardPad(props) {
    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography>{props.value}</Typography>
                        {pad1Wells.map(item => <Box sx={{display: 'flex', padding: '5px', minWidth: '100px'}}><CardRig value={item} /></Box>)}
                </CardContent>
            </Card>
        </Container>
    )
}

export default CardPad;
