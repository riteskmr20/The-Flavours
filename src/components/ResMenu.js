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

          <div className="mt-8 border border-gray-300 p-6 rounded-xl shadow-md bg-white">
            <h3 className="text-xl font-semibold flex items-center mb-4">
              <FcRating className="text-2xl mr-2" />
              {avgRating} ({totalRatingsString}) • {costForTwoMessage}
            </h3>
            <p className="text-gray-700 text-base mb-3">
              {cuisines.join(", ")}
            </p>
            <p className="text-gray-600 text-base mb-3">Outlet: {areaName}</p>
            <p className="text-gray-600 text-base mb-3 lowercase">
              {sla?.slaString}
            </p>
            <p className="text-gray-600 font-semibold">
  2.1 kms | <span className="font-semibold text-gray-600">₹20 Delivery fee will apply</span>
</p>

          </div>
        </div>

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
