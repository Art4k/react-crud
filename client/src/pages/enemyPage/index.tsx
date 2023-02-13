import { Box, CardMedia } from "@mui/material";
import HealthBar from "pages/inventory/healthBar";
import PlayerStats from "pages/inventory/playerStats";
import React from "react";
import ApiService from "services/api-service";

type EnemyProps = {
  damageTaken: number;
  damageGiven: number;
};

const Enemy: React.FC<EnemyProps> = ({ damageTaken, damageGiven }) => {
  const [healthBar, setBar] = React.useState(100);
  const [monster, setMonster] = React.useState<MonsterModel>();
  React.useEffect(() => {
    (async () => {
      const fetchMonsterData = await ApiService.getMonstersData();
      setMonster(fetchMonsterData[Math.floor(Math.random() * fetchMonsterData.length)]);
    })();
  }, []);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setBar((currentHealth) => {
        if (currentHealth <= damageTaken) {
          return "Laimėjai";
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 8,
        }}
        key={monster?.id}
      >
        <Box>{`${monster?.username} [${monster?.level}]`}</Box>
        <HealthBar healthPoints={healthBar} />
        <CardMedia component="img" sx={{ width: 120 }} image={`src/${monster?.monsterImage[0]}`} />
      </Box>
      <PlayerStats
        key={monster?.username}
        health={monster?.health}
        level={monster?.level}
        defense={monster?.defense}
        strength={monster?.strength}
        attack={{
          min: monster?.attack.minAttack,
          max: monster?.attack.maxAttack,
        }}
      />
    </Box>
  );
};

export default Enemy;
