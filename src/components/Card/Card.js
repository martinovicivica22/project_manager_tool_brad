import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import { createTheme } from "@mui/material/styles";
// import { ThemeProvider } from "@emotion/react";

const CardBasic = ({ well }) => {
  return (
    <Card>
      <div>
        <CardContent>
          <Typography component="h5" variant="h5">
            {well.title}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default CardBasic;
