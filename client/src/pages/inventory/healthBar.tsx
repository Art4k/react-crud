import { Box, Button, LinearProgress } from "@mui/material";
import React from "react";

type HealthProps = {
  healthPoints: number;
};

const HealthBar: React.FC<HealthProps> = ({ healthPoints }) => {
  const [healthBar, setBar] = React.useState(healthPoints);
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" color="success" value={healthBar} />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>{healthBar}</Box>
    </Box>
  );
};

export default HealthBar;
