import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
// import resList from "../utils/mockData"; 
import Shimmer from "./Shimmer";
import Closeres from "./Closedres";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer";




const Body = () => { 

   {/*local state variable- super powerful variable*/}

   const [listOfRestaurant,setListOfRestaurant]=useState([]);
   const [filteredRestaurant,setfilteredRestaurant]=useState([]);

  
   const [searchText,setSearchText]=useState("");
   console.log(listOfRestaurant);


   useEffect(() =>{
    fetchData();
   }, []);
  

   const handleTopRatedFilter = () => {
    
      
       const filteredList=listOfRestaurant.filter
       (
         (res)=>res.info.avgRating > 4.3

       );
       setfilteredRestaurant(filteredList);
       // console.log(filteredList);
      }




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
          <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md p-6 rounded-lg">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
        <input
          type="text"
          className="border border-gray-300 rounded-l-lg p-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-yellow-500 text-white hover:bg-yellow-600 rounded-r-lg px-4 py-2 mt-2 md:mt-0 md:ml-2 transition-transform transform hover:scale-105"
          onClick={()=>{
                

            const filteredRes=listOfRestaurant.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
  
            setfilteredRestaurant(filteredRes);
  
            // console.log(searchText);
  
          }}
        >
          Search
        </button>
      </div>

      {/* Top-rated Restaurant */}
      <button
        className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-2 rounded-lg transition-transform transform hover:scale-105"
        onClick={handleTopRatedFilter}
      >
        Top-rated Restaurant
      </button>
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

          <div>
            <Footer/>
           </div>
        </div>
      );
  }

  export default Body;
  



    