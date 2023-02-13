import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5007",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getPlayersData = async () => {
  const { data: getPlayer } = await api.get<PlayerModel[]>("/characters");
  return getPlayer;
};

const getMonstersData = async () => {
  const { data: getMonster } = await api.get<MonsterModel[]>("/monsters");
  return getMonster;
};

const getItemsData = async () => {
  const { data: getItem } = await api.get<ItemModel[]>("/items");
  return getItem;
};

const ApiService = {
  getPlayersData,
  getMonstersData,
  getItemsData,
};

export default ApiService;
