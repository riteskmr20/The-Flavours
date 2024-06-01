import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
// import resList from "../utils/mockData"; 
import Shimmer from "./Shimmer";
import Closeres from "./Closedres";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Body = () => { 

   {/*local state variable- super powerful variable*/}

   const [listOfRestaurant,setListOfRestaurant]=useState([]);
   const [filteredRestaurant,setfilteredRestaurant]=useState([]);

  
   const [searchText,setSearchText]=useState("");
   console.log(listOfRestaurant);


   useEffect(() =>{
    fetchData();
   }, []);
  


 {/*Fetching api of restaurant cards*/}

  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json);  
     
  }



  
  {/*check user online or not*/}

  const onlineStatus = useOnlineStatus();

  if(onlineStatus===false)
    return (
    <h1>
      No internet connectivity.Please check your network
    </h1>
    );

 
  

  
  
   
    if(listOfRestaurant === undefined)
    {
      return <Closeres/>
    }
  


    return listOfRestaurant.length === 0? (
      
      <Shimmer/>
      
      ):(
        
        <div className="body">
          <div className="filter flex">



            {/* search bar */}
            <div className="search m-4 p-4">

              <input type="text" className="border border-solid border-black  " value={searchText} onChange={(e)=>
              {
                setSearchText(e.target.value);
              }}/> 

             
              <button className="bg-zinc-400 hover:bg-gray-400 m-4 py-2 px-4 rounded-sm" onClick=
              {()=>{
                

                const filteredRes=listOfRestaurant.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )

                setfilteredRestaurant(filteredRes);

                // console.log(searchText);

              }}>Search</button>

            </div>




            {/* top-rated restaurant */}
            <div className="flex m-4 p-4 items-center">
              <button className="filter-btn px-4 py-2 bg-zinc-400 rounded-sm" 
               onClick=
               {() =>
               {  
                const filteredList=listOfRestaurant.filter
                (
                  (res)=>res.info.avgRating > 4.3
  
                );
                setfilteredRestaurant(filteredList);
                // console.log(filteredList);
               }
               }>Top-rated Restaurant</button>
            </div>
           

           </div>


          


          {/*Rendering the filtered restaurant*/}

          <div className="rest-container flex flex-wrap justify-center">  
            {
              filteredRestaurant.map((restaurant) => {
                // console.log(restaurant);  
              return <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>
              })  
            }

           
            
              
          
          </div>
        </div>
      );
  }

  export default Body;
  



    