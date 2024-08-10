import React, { useState, useEffect } from "react";
import { API_URL } from "../utilities/constants";

const Scroll = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await fetch(API_URL);
      let data = await res.json();
      setItems(data?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      // console.log(data?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    };

    getData();
  }, []);

  return (
    <>
   
        <h1 className="scroll-heading">Whats on your mind?</h1>
        <div className="scroll-image-container">

        {items?.map((item) => (
         
          <img
            className="round-image" key={item.id}
            alt="round-img"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
          />
   
        ))}
                {/* <div className="arrow" id="left-arrow">&#9664;</div>
          <div className="arrow" id="right-arrow">&#9654;</div> */}
               </div>
   
    </>
  );
};
export default Scroll;
