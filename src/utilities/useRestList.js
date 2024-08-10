import { API_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestList = () => {
  let [restData, setRestData] = useState(null);
  console.log(" in fetch hook- over useEffect")

  useEffect(() => {
    console.log("in fetch - inside useEffefct")
    let getData = async () => {
      let res = await fetch(API_URL);
      let data = await res.json();

      setRestData(data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log("in fetch - data fetched is ",restData )
    };
    getData();
  }, []);
  console.log("in fetch - under useEffect")
  return restData;
};
export default useRestList;
