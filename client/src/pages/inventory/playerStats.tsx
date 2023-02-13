import { Box } from "@mui/material";
import React from "react";

type PlayerStatProps = {
  health: number | undefined;
  level: number | undefined;
  defense: number | undefined;
  strength: number | undefined;
  attack: {
    min: number | undefined;
    max: number | undefined;
  };
};

const PlayerStats: React.FC<PlayerStatProps> = ({ health, level, defense, strength, attack }) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Box>Player stats</Box>
    <Box>{`Health: ${health}`}</Box>
    <Box>{`Level: ${level}`}</Box>
    <Box>{`Defense: ${defense}`}</Box>
    <Box>{`Strength: ${strength}`}</Box>
    <Box>{`Attack: ${attack.min} - ${attack.max}`}</Box>
  </Box>
);

export default PlayerStats;
