import { API_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestList = () => {
  let [restData, setRestData] = useState(null);

  useEffect(() => {
    let getData = async () => {
      let res = await fetch(API_URL);
      let data = await res.json();
      setRestData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
    };
    getData();
  }, []);
  return restData;
};
export default useRestList;
