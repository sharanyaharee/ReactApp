import React from "react";
import { CDN_URL } from "../utilities/constants";
import { useState } from "react";

const itemList = ({ itemCards }) => {
  console.log("llll", itemCards);
  return (
    <>   
      {itemCards.map((item) => {
        return (
          <div
            className="p-8 border-b-2 flex justify-between"
            key={item.card.info.id}
          >
            <div className="w-9/12">
              <h1 className="font-bold text-lg my-1">{item.card.info.name}</h1>
              <h1 className="font-bold">₹{item.card.info.price / 100}</h1>
              <h1>{item.card.info.description}</h1>

              {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                <h1 className="text-green-900 font-extrabold">
                  ⭐{item.card.info.ratings.aggregatedRating.rating}
                </h1>
              )}
            </div>
            <div className=" w-3/12">
             
              {  item?.card?.info?.imageId? (<> <div className="absolute">
                <button className="text-green-900 mx-14 shadow-md bg-white font-bold p-1 border rounded-lg">
                  ADD +
                </button>
              </div>
                <img
                src={CDN_URL + item?.card?.info?.imageId}
                className=" rounded-2xl h-32 w-40"
                alt="item image"
              /></>): null

              }
           
            </div>
          </div>
        );
      })}
    </>
  );
};

export default itemList;
