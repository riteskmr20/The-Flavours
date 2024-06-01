import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { FaStar } from "react-icons/fa";

const ItemList = ({ items }) => {
  // {console.log(items)}

  const dispatch = useDispatch();

  const dispatchItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-gray-200 border-b-2 flex justify-between "
        >
          <div className="w-9/12  py-7">
            <div className=" py-2">
              <span className="items-name">{item?.card?.info?.name}</span>

              <p className="font-bold">
                ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </p>

              <p className="inline-flex items-center my-2">
                {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
                  <>
                    <FaStar className="mr-1 size-3" />
                    {item.card.info.ratings.aggregatedRating.rating} (
                    {item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </>
                ) : null}
              </p>
              
            </div>
            <p className="desc text-[16px] text-pretty break-words">
              {item?.card?.info?.description}
            </p>
          </div>

          <div className="w-3/12 p-4 ">
            <div className="absolute">
              <button
                className="p-2 bg-white shadow-sm font-bold text-green-600  rounded-lg w-24  hover:bg-gray-300 mt-36 "
                onClick={() => dispatchItems(item)}
              >
                ADD
              </button>
            </div>
            <img
              src={IMG_CDN_URL + item?.card?.info?.imageId}
              className="h-36 w-36 m-1 rounded-lg mt-8"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
