import React from "react";
import Container from "@mui/material/Container";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import mockData from "../../MockData";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import CardBasic from "../Card/Card";

function DragNDrop() {
  const [pads, setPads] = useState(mockData);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const padsNew = Array.from(pads);
    const [removed] = padsNew.splice(startIndex, 1);
    padsNew.splice(endIndex, 0, removed);

    setPads(padsNew);
  };

  return (
    <Container maxWidth="xl">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <List
              {...provided.droppableProps}
              innerRef={provided.innerRef}
              subheader="Pad Designation"
            >
              {pads.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <ListItem
                      innerRef={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleprops}
                      key={item.id}
                    >
                      <CardBasic well={item} />
                    </ListItem>
                  )}
                </Draggable>
              ))}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default DragNDrop;
