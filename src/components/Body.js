import { API_URL } from "../utilities/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [restData,setRestData] = useState([])
  let [filterRest, setFilterRest] = useState([]);
  let [inputData, setInputData] = useState("");

  useEffect(() => {
    let getData = async () => {
      let res = await fetch(API_URL);
      let data = await res.json();

      setFilterRest(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setRestData( data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
    };
    getData();
  }, []);

  return (
    <div className="body-layout">
      {restData.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <input
            className="search"
            type="search"
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() =>{
              setFilterRest(
                restData?.filter(({info}) => info.name.toLowerCase().includes(inputData.toLowerCase()))
              )
              setInputData("")
            }
            }
          >
            Search
          </button>

          <button className="filter-btn" onClick={()=>{setFilterRest(restData)}}>All</button>
          <button
            className="filter-btn"
            onClick={() => {
              setFilterRest(
                restData?.filter(({ info }) => info.avgRating > 4)
              );
            }}
          >
            Top Rated Restaurants
          </button>

          <div className="container">
            {filterRest?.map(({ info }) => {
              return (
                <div className="card" key={info.id}>
                  <RestaurantCard info={info} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
