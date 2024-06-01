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
      costForTwo
    } = resData?.info;
  
  
    return (
      <div className="rest-container m-4 p-4 w-[300px] ">
        <div className="rest-cards h-2/4" style={styleCard}>
          <img
            className="res-logo rounded-xl"
            alt="res-logo"
            src={IMG_CDN_URL+cloudinaryImageId}
          />

          <h3 className="">{name}</h3>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{avgRating}</h5>
          <h5>{resData.info.sla.deliveryTime} minutes</h5>
          <h5>{costForTwo}</h5>

        </div>
      </div>
    );
  };

  export default RestaurantCard;