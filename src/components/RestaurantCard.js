import { Link } from "react-router-dom";

let RestaurantCard = ({ info }) => {
  return (
    <div className="mb-2">
      <Link to={`/restaurants/${info.id}`}>
      
        <img
          className="rounded-xl p-2 h-44 w-72 mb-2"
          alt="rest image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
        />
        <div className="p-2 ">
        <h3 className="text-xl font-bold ">{info.name}</h3>
        <p>
          {info.locality} , {info.areaName}
        </p>
        <p>Average Rating : {info.avgRating}</p>
        <h5>Delivery Time : {info.sla.deliveryTime}</h5>
        <h5>Cost For Two : {info.costForTwo}</h5>
        </div>
      </Link>
    </div>
  );
};

//higher order component

export const withPromotedLabel =(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-green-700 text-white p-1 rounded-s">Veg</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

// export const withPromotedLabel =(RestaurantCard)=>{
//   return(props)=>{
//     return(
//       <div>
//         <label className="absolute bg-green-700 text-white p-1 rounded-sm">Veg</label>
//         <RestaurantCard  {...props}/>

//       </div>
//     )
//   }
// }

export default RestaurantCard;
