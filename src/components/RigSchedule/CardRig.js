import { Card, CardContent, Typography, Box } from "@mui/material";
import React from "react";



function CardRig(props) {
    return(
            <Card>
                <CardContent>
                    <Typography>{props.value}</Typography>
                </CardContent>
            </Card>
    )
}

export default CardRig;