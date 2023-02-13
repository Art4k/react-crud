import React from "react";
import { Box, Button, CardMedia } from "@mui/material";
import ApiService from "services/api-service";
import PlayerStats from "./inventory/playerStats";
import HealthBar from "./inventory/healthBar";
import Enemy from "./enemyPage";

const HomePage = () => {
  const [player, setPlayer] = React.useState<PlayerModel[]>([]);

  const applyStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  };

  React.useEffect(() => {
    (async () => {
      const fetchPlayerData = await ApiService.getPlayersData();
      setPlayer(fetchPlayerData);
    })();
  }, []);

  return (
    <Box sx={applyStyle}>
      {player.map(({ username, health, level, defense, strength, attack }) => (
        <PlayerStats
          key={username}
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
      <Box sx={{ px: 8 }}>
        <Button variant="outlined">Attack</Button>
      </Box>
      <Box sx={applyStyle}>
        <Enemy damageTaken={10} damageGiven={5} />
      </Box>
      <Box />
    </Box>
  );
};

export default HomePage;
