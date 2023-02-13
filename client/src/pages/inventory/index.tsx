import { Box, CardMedia } from "@mui/material";
import React from "react";
import ApiService from "services/api-service";
import HealthBar from "./healthBar";
import ItemsList from "./itemsList";
import PlayerStats from "./playerStats";

const PlayerInventory = () => {
  const [player, setPlayer] = React.useState<PlayerModel[]>([]);
  React.useEffect(() => {
    (async () => {
      const fetchPlayerData = await ApiService.getPlayersData();
      setPlayer(fetchPlayerData);
    })();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      {player.map(({ health, level, defense, strength, attack }) => (
        <PlayerStats
          health={health}
          level={level}
          defense={defense}
          strength={strength}
          attack={{
            min: attack.minAttack,
            max: attack.maxAttack,
          }}
        />
      ))}
      {player.map(({ id, username, level, health, characterImage }) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 8,
          }}
          key={id}
        >
          <Box>{`${username} [${level}]`}</Box>
          <HealthBar healthPoints={health} />
          <CardMedia component="img" sx={{ width: 120 }} image={`src/${characterImage[0]}`} />
        </Box>
      ))}
      <ItemsList />
      <Box />
    </Box>
  );
};

export default PlayerInventory;
