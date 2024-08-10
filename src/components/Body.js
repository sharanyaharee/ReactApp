import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import useRestList from "../utilities/useRestList";
import Shimmer from "./Shimmer";
import Scroll from "./Scroll";

const Body = () => {
  let [filterRest, setFilterRest] = useState([]);
  let [inputData, setInputData] = useState("");

  let restData = useRestList();
  useEffect(() => {
    if (restData) {
      setFilterRest(restData);
    }
  }, [restData]);


  if (!restData || restData.length === 0) return <Shimmer />;

  return (
    <div className="body-layout">
      <Scroll />
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
        onClick={() => {
          setFilterRest(
            restData?.filter(({ info }) =>
              info.name.toLowerCase().includes(inputData.toLowerCase())
            )
          );
          setInputData("");
        }}
      >
        Search
      </button>

      <button
        className="filter-btn"
        onClick={() => {
          setFilterRest(restData);
        }}
      >
        All
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          setFilterRest(restData?.filter(({ info }) => info.avgRating > 4.5));
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="container">
        
      {filterRest.length === 0?(<h2>No items found!</h2>):
        
        filterRest?.map(({ info }) => {
          return (
            <div className="card" key={info.id}>
              <RestaurantCard info={info} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
