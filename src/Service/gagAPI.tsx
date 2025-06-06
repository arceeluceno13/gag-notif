import axios from "axios";

const api = axios.create({
  baseURL: "https://growagardenstock.vercel.app",
});

// Get all stock data
export const getAllStock = async () => {
  const { data } = await api.get("/api/stock/all");
  return data;
};

// Get weather data
export const getWeather = async () => {
  const { data } = await api.get("/api/weather");
  return data;
};

// Get specific stock category (seeds)
export const getSeeds = async () => {
  const { data } = await api.get("/api/stock/seeds");
  return data;
};

// Get specific stock category (gear)
export const getGear = async () => {
  const { data } = await api.get("/api/stock/gear");
  return data;
};

// Get specific stock category (egg)
export const getEgg = async () => {
  const { data } = await api.get("/api/stock/egg");
  return data;
};

// Get specific stock category (honey)
export const getHoney = async () => {
  const { data } = await api.get("/api/stock/honey");
  return data;
};

// Get specific stock category (cosmetics)
export const getCosmetics = async () => {
  const { data } = await api.get("/api/stock/cosmetics");
  return data;
};

export const refresh = async () => {
  const { data } = await api.get("/api/refresh");
  return data;
};

// Example usage
// (Remove or comment out in production)
(async () => {
  const weather = await getWeather();
  const allStock = await getAllStock();
  const seedsStock = await getSeeds();
  const gearStock = await getGear();
  const eggStock = await getEgg();
  const refreshData = await refresh();

  // console.log("Weather Data:", weather);
  // console.log("All Stock Data:", allStock);
  // console.log("Seeds Stock Data:", seedsStock);
  // console.log("Gear Stock Data:", gearStock);
  // console.log("Egg Stock Data:", eggStock);
  // console.log("Refresh Data:", refreshData);
  
})();
