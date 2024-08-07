import { IMG_CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "white",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[300px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <h5 className="text-sm text-gray-500">{cuisines.join(", ")}</h5>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">⭐ {avgRating}</span>
          <span className="text-sm text-gray-500">{resData.info.sla.deliveryTime} mins</span>
        </div>
        <h5 className="mt-2 text-sm font-medium text-gray-800">{costForTwo}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
