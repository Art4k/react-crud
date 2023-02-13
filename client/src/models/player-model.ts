type PlayerModel = {
  id: number;
  username: string;
  level: number;
  health: number;
  defense: number;
  strength: number;
  attack: {
    minAttack: number;
    maxAttack: number;
  };
  characterImage: Array<string>;
};
