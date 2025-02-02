import { CDN_URL } from "./constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwo,
}) => {
  return (
    <div className="w-52 p-2 m-2 bg-gray-300 shadow-2xl">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwo} </h4>
    </div>
  )
}
// const RestaurantCard = (props) => {
//   const { resData } = props;

//   const {
//     cloudinaryImageId,
//     name,
//     avgRating,
//     cuisines,
//     costForTwo,
//     deliveryTime,
//   } = resData;

//   return (
//     <div
//       data-testid="resCard"
//       className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
//     >
//       <img
//         className="rounded-lg"
//         alt="res-logo"
//         src={CDN_URL + cloudinaryImageId}
//       />
//       <h3 className="font-bold py-4 text-lg">{name}</h3>
//       <h4>{cuisines}</h4>
//       <h4>{avgRating} stars</h4>
//       <h4>₹{costForTwo / 100} FOR TWO</h4>
//       <h4>{deliveryTime} minutes</h4>
//     </div>
//   );
// };


export default RestaurantCard;
