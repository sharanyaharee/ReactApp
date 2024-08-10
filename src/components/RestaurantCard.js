import { Link } from "react-router-dom";

let RestaurantCard = ({ info }) => {
  return (
    <div className="restaurant-card">
      <Link to={`/restaurants/${info.id}`}>
      
        <img
          className="restaurantImg"
          alt="rest image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
        />
        <h3>{info.name}</h3>
        <p>
          {info.locality} , {info.areaName}
        </p>
        <p>Average Rating : {info.avgRating}</p>
        <h5>Delivery Time : {info.sla.deliveryTime}</h5>
        <h5>Cost For Two : {info.costForTwo}</h5>
      </Link>
    </div>
  );
};

export default RestaurantCard;
