import React, { useState } from "react";
import ItemList from './ItemList'


const MenuCategory = ({ card }) => {

  const [showItems,setShowItems]=useState(false)
  // console.log("category list  in Mmmmmmmmmmmmmmmmmmm component", card);

    const handleCLick = () => {
 setShowItems(!showItems)
    };
  return (
    
    <div className="w-10/12 mx-auto my-5 py-5 shadow-md bg-slate-200 ">
       <div className= " p-4 py-7 rounded-sm bg-gray-50 flex justify-between cursor-pointer" onClick={handleCLick}>

        <span className="font-bold">{card.title}{`    (${card.itemCards.length})`}</span>
        <span>⬇️</span>
        
       </div>
   
 {
  showItems &&  <div className=" bg-gray-50">
  <ItemList itemCards={card.itemCards}/>
  </div> 
 }
    
     
    </div>
  )
}

export default MenuCategory;
