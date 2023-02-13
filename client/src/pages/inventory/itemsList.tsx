import { Box, CardMedia } from "@mui/material";
import React from "react";
import ApiService from "services/api-service";
import Tooltip from "@mui/material/Tooltip";

const ItemsList = () => {
  const [item, setItem] = React.useState<ItemModel[]>([]);
  React.useEffect(() => {
    (async () => {
      const fetchItemData = await ApiService.getItemsData();
      setItem(fetchItemData);
    })();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box>Inventory</Box>
      {item.map(({ id, name, defense, strength, attack, itemImage }) => (
        <Box key={id}>
          {itemImage.map((imageLink) => (
            <Tooltip
              key={imageLink}
              title={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <span style={{ whiteSpace: "pre-line" }}>
                  {`${name}
                  Attack: ${attack.minAttack} - ${attack.maxAttack}
                  Defense: ${defense}
                  Strength: ${strength}
                      `}
                </span>
              }
              placement="top"
            >
              <CardMedia component="img" sx={{ width: 32, py: 1 }} image={`src/${imageLink}`} />
            </Tooltip>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default ItemsList;
