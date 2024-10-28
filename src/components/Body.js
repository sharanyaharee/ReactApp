import RestaurantCard from "./RestaurantCard";
import { useState,useEffect} from "react";
import useRestList from "../utilities/useRestList";
import Shimmer from "./Shimmer";
import Scroll from "./Scroll";
import { withPromotedLabel } from "./RestaurantCard";



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
  let Promoted = withPromotedLabel(RestaurantCard)
 


  return (
    <div >
      <Scroll />
      <input
        className="w-60 ms-44 p-2 border border-orange-500 rounded-lg"
        type="search"
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button
        className="border me-3 rounded-lg bg-orange-300 p-2"
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
        className="border rounded-lg m-3 bg-orange-300 p-2"
        onClick={() => {
          setFilterRest(restData);
        }}
      >
        All
      </button>
      <button
        className="border rounded-lg  bg-orange-300 p-2"
        onClick={() => {
          setFilterRest(restData?.filter(({ info }) => info.avgRating > 4.5));
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="flex flex-wrap justify-between my-4 mx-44">
        
      {filterRest.length === 0?(<h2>No items found!</h2>):
        
        filterRest?.map(({ info }) => {
          // console.log("bhbhbhbh",info)
          return (
          
            
            <div className=" w-72 mb-3 hover:bg-slate-100 hover:scale-105" key={info.id}>
            {
              
              info.veg?( <Promoted info={info} />):(<RestaurantCard info={info}/>)
            }
            
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
