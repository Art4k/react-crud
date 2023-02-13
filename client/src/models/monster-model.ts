type MonsterModel = {
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
  monsterImage: Array<string>;
};
