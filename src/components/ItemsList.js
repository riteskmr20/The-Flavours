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
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border border-gray-200 bg-white rounded-lg shadow-md flex flex-col md:flex-row"
        >
          <div className="w-full md:w-9/12 p-6">
            <h3 className="text-xl font-semibold mb-2">
              {item?.card?.info?.name}
            </h3>
            <p className="text-lg font-bold mb-2">
              ₹ {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="inline-flex items-center text-yellow-500 mb-2">
              {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
                <>
                  <FaStar className="text-xl mr-1" />
                  {item.card.info.ratings.aggregatedRating.rating} (
                  {item.card.info.ratings.aggregatedRating.ratingCountV2})
                </>
              ) : null}
            </p>
            <p className="text-gray-700 text-base break-words">
              {item?.card?.info?.description}
            </p>
          </div>

          <div className="w-full md:w-3/12 p-6 flex flex-col items-center justify-center">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-green-700 transition-colors mb-4"
              onClick={() => dispatchItems(item)}
            >
              ADD
            </button>
            <img
              src={IMG_CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
              className="h-36 w-36 object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
