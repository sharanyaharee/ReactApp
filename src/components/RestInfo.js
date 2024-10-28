import useFetchRestInfo from "../utilities/useFetchRestInfo";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";
import { CDN_URL } from "../utilities/constants";

const RestInfo = () => {
  let { restId } = useParams();
  let [restaurantInfo, menuInfo] = useFetchRestInfo(restId);

  if (!restaurantInfo || !menuInfo) return <Shimmer />;
  // console.log("nnn", restaurantInfo?.card?.card?.info);
  return (
    <div className="mx-72 my-4">
      <div className=" mx-auto w-8/12 ">
        <h1 className="p-2 text-lg font-bold">
          {restaurantInfo?.card?.card?.info?.name?.toUpperCase()}
        </h1>
        <div className="border rounded-lg border-b-2 shadow-md p-4 ">
          <div className="flex justify-between items-center"></div>
          <h3 className="font-semibold">
            ⭐{restaurantInfo?.card?.card?.info?.avgRating} (
            {restaurantInfo?.card?.card?.info?.totalRatingsString}) -
            {restaurantInfo?.card?.card?.info?.costForTwoMessage}
          </h3>
          <p>
            <b> {restaurantInfo?.card?.card?.info?.cuisines.join(" ,")}</b>
          </p>
          <p>Outlet - {restaurantInfo?.card?.card?.info?.locality}</p>
          <h4>{restaurantInfo?.card?.card?.info?.city} City</h4>
          <p>
            {restaurantInfo?.card?.card?.info?.sla?.slaString ? (
              <>
                Delivery Time:{" "}
                <b>{restaurantInfo.card.card.info.sla.slaString}</b>
              </>
            ) : null}
          </p>
        </div>
      </div>
      <div className="">
        {menuInfo?.map((item) => (
          <MenuCategory key={item?.card?.card?.title} card={item?.card?.card} />
        ))}
      </div>
    </div>
  );
};
export default RestInfo;
