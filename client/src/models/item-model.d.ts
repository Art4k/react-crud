type ItemModel = {
  id: number;
  name: string;
  defense: number;
  strength: number;
  attack: {
    minAttack: number;
    maxAttack: number;
  };
  itemImage: Array<string>;
};
