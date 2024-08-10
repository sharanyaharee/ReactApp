import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useFetchRestInfo = (restId) => {
  let [restaurantInfo, setRestaurantInfo] = useState(null);
  let [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    let getData = async () => {
      let res = await fetch(`${MENU_URL}${restId}`);
      let data = await res.json();
      setRestaurantInfo(data?.data?.cards[2]);
      setMenuInfo(
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
          ?.card?.itemCards
      );
    };

    getData();
  }, []);
console.log(restaurantInfo,menuInfo)
  return [restaurantInfo, menuInfo];
};
export default useFetchRestInfo;
