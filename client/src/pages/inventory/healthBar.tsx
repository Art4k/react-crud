import { Box, Button, LinearProgress } from "@mui/material";
import React from "react";

type HealthProps = {
  healthPoints: number;
};

const HealthBar: React.FC<HealthProps> = ({ healthPoints }) => {
  const [healthBar, setBar] = React.useState(healthPoints);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setBar((currentHealth) => {
        if (currentHealth === healthPoints) {
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.floor(Math.min(currentHealth + diff, 100));
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" color="success" value={healthBar} />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {healthBar}
        <Button variant="outlined" onClick={() => setBar(healthBar - 10)}>
          Attack
        </Button>
      </Box>
    </Box>
  );
};

export default HealthBar;
