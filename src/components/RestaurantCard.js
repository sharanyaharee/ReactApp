let RestaurantCard =({info})=>{
    return(
        <div className="restaurant-card">

        <img className="restaurantImg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}/>
        <h3>{info.name}</h3>
        <p>{info.locality} , {info.areaName}</p>
        <p>Average Rating : { info.avgRating}</p>
        <h5>Delivery Time : { info.sla.deliveryTime}</h5>
        <h5>Cost For Two : { info.costForTwo}</h5>
 
   
    </div>

    )
}

export default RestaurantCard