import { useEffect, useState, useCallback } from "react";
import {
  getWeather,
  getSeeds,
  getAllStock,
  getGear,
  getEgg,
  getHoney,
  getCosmetics,
} from "../Service/gagAPI";

export function useStockData(pollInterval = 10000) {
  const [weather, setWeather] = useState<any>(null);
  const [seedsStock, setSeeds] = useState<any>(null);
  const [gearStock, setGear] = useState<any>(null);
  const [eggStock, setEgg] = useState<any>(null);
  const [honeyStock, setHoney] = useState<any>(null);
  const [cosmeticsStock, setCosmetics] = useState<any>(null);
  const [allStock, setAllStock] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const weatherData = await getWeather();
      const seedsData = await getSeeds();
      const gearData = await getGear();
      const eggData = await getEgg();
      const honeyData = await getHoney();
      const cosmeticsData = await getCosmetics();
      const allStockData = await getAllStock();

      setWeather(weatherData);
      setSeeds(seedsData);
      setGear(gearData);
      setEgg(eggData);
      setHoney(honeyData);
      setCosmetics(cosmeticsData);
      setAllStock(allStockData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let intervalID: NodeJS.Timeout;
    let isFetching = false;

    const intervalFetch = async () => {
      if (isFetching || document.hidden) return;
      isFetching = true;
      await fetchData();
      isFetching = false;
    };

    fetchData();
    intervalID = setInterval(intervalFetch, pollInterval);

    return () => clearInterval(intervalID);
  }, [fetchData, pollInterval]);

  return {
    weather,
    seedsStock,
    allStock,
    gearStock,
    eggStock,
    honeyStock,
    cosmeticsStock,
    loading,
    refresh: fetchData,
  };
}
