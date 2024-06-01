import { useState } from "react";
import ItemList from "./ItemsList";
// import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";

const RestaurantCategory=({data})=>{
    
    const [showItems,setshowItems]=useState(false);
    const handleClick=()=>{
     setshowItems(!showItems);
    } 
    
    
    
    return (
        <div>
            
            {/*Accordian Header */}
           
           <div className="accordian  bg-slate-50 shadow-lg p-4 my-4 ">
              <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
                <span className="font-bold text-lg">{data?.title} ({data.itemCards.length})
                </span>

                {showItems===false?<p><RxCaretDown size="2rem" /></p>:<p><RxCaretUp size="2rem" /></p>}
                
               </div> 
                
               {/*Accordian Body*/}
              {showItems &&<ItemList key={data?.card?.info?.category} items={data.itemCards}/>}
            </div>
            

         
        </div>
    );
};
export default RestaurantCategory;