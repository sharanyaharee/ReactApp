import useFetchRestInfo from "../utilities/useFetchRestInfo";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";

const RestInfo = () => {
  let { restId } = useParams();
  let [restaurantInfo, menuInfo] = useFetchRestInfo(restId);
  let [expandedItem, setExpandedItem] = useState(null);
  
  const toggleBtn =(id)=>{
    setExpandedItem(expandedItem === id? null: id)
  }

  if (!restaurantInfo || !menuInfo) return <Shimmer />;



  return (
    <div className="rest-container">
      <div className="restInfo-container">
        <h1>{restaurantInfo?.card?.card?.info?.name}</h1>

        <h3>
          Rating :{restaurantInfo?.card?.card?.info?.avgRating} -
          {restaurantInfo?.card?.card?.info?.costForTwoMessage}
        </h3>
        <p>
          <b> {restaurantInfo?.card?.card?.info?.cuisines.join(" ,")}</b>
        </p>
        <p>
          <b>Outlet - </b> {restaurantInfo?.card?.card?.info?.locality}
        </p>
        <h4>{restaurantInfo?.card?.card?.info?.city} City</h4>
        <p>Delivery Time: {restaurantInfo?.card?.card?.info?.sla.slaString}</p>
      </div>
      <div className="menu-container">
        {menuInfo?.map((item) => {
          let itemId = item?.card?.info?.id;
          let isExpand = expandedItem === itemId;

          return (
            <div className="menu-item" key={item?.card?.info?.id}>
              <div className="menu-itemDetails">
                <div className="menu-header" onClick={()=>{
                 toggleBtn(itemId)
                  
                }}>
                  <h3>{item?.card?.info?.name}-  
                      ₹{item?.card?.info?.price || item?.card?.info?.defaultPrice}
                    </h3>
                  <span class="accordian-btn">{isExpand?"-":"+"}</span>

                </div>
                {
                  isExpand &&
                  (   <div className="wrapper">
                    <div className="info">
                  
                    <h4>
                      {item?.card?.info?.ratings?.aggregatedRating.rating}- Rating{" "}
                    </h4>
                    <p>{item?.card?.info?.description}</p>
                      </div>
                    
                    <div className="image">
                    <img
                    className="menu-image"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
                  />
                      </div>
                  </div>)
                }
             
              </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestInfo;
