// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { FcRating } from "react-icons/fc";

const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    feeDetails,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //  console.log(itemCards)


  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="menu">
      <div className="menu-content w-6/12 m-auto ">
        <div className="restaurant-details">
          <div className="res-name text-2xl mt-16  tracking-wider font-black font-abc ">
            <h1 className="m-auto">{name}</h1>
          </div>

          <div className="res-name-details mt-8 border-2  p-4  rounded-xl shadow-neutral-700 from-current ">
            <h3 className="font-semibold inline-flex items-center ">
            <FcRating className="mr-1" />{avgRating} ({totalRatingsString}) • {costForTwoMessage}
            </h3>
            <p>{cuisines.join(", ")}</p>
            <p className="ms-5">Outlet {areaName}</p>
            <p className="lowercase ms-5">{sla?.slaString}</p>
            <p>{feeDetails?.message}</p>
          </div>
        </div>

        <h2>Menu</h2>

        {/*Categories Accordian */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={false}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;