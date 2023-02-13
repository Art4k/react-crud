import React from "react";
import { Box } from "@mui/material";
import ApiService from "services/api-service";

const HomePage = () => {
  const [player, setPlayer] = React.useState<PlayerModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchPlayerData = await ApiService.getPlayersData();
      setPlayer(fetchPlayerData);
    })();
  }, []);

  return (
    <Box>
      <Box component="pre">{JSON.stringify(player, null, 4)}</Box>
    </Box>
  );
};

export default HomePage;
