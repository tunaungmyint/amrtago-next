// "use client";
// import { useState, useEffect } from "react";

// import Link from "next/link";
// const url = `https://amrta-api.vercel.app/place/nearbytype/96.0891/21.9588/Rest`;

// const Restaurant = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   // const fallbackimage = `${"https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"}`;

//   async function getRestaurants() {
//     const response = await fetch(url);
//     const restaurants = await response.json();

//     setRestaurants(restaurants);
//   }

//   useEffect(() => {
//     getRestaurants();
//   }, []);
//   return restaurants ? (
//     <div>
//       <div>
//         <h5 className="text-gray-700 font-bold mx-4">
//           Restaurants in your area
//         </h5>
//       </div>
//       <div className="max-w-[1400px] h-[280px] w-full p-2   mx-auto flex overflow-x-scroll no-scrollbar">
//         {restaurants.map((restaurant) => (
//           <Link href={`restaurants/${restaurant._id}`} className="m-2 ">
//             <div
//               key={restaurant._id}
//               style={{
//                 backgroundImage: `url(${
//                   !restaurant.images
//                     ? "https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"
//                     : restaurant.images[0].pathimages
//                 })`,
//               }}
//               className="w-[250px] h-[200px] bg-center bg-cover duration-500 "
//             ></div>
//             <h5 className="font-bold mt-1">{restaurant.localize.name[1]}</h5>
//           </Link>
//         ))}
//       </div>
//     </div>
//   ) : (
//     <div className="text-orange-700 text-center text-xl">Loading....</div>
//   );
// };

// export default Restaurant;

import Link from "next/link";
const url = `https://amrta-api.vercel.app/place/nearbytype/96.0891/21.9588/Rest`;

async function getRestaurants() {
  const restaurants = await fetch(url);
  return await restaurants.json();
}

const Restaurant = async () => {
  const restaurants = await getRestaurants();

  return restaurants ? (
    <div>
      <div>
        <h5 className="text-gray-700 font-bold mx-4">
          Restaurants in your area
        </h5>
      </div>
      <div className="max-w-[1400px] h-[280px] w-full p-2   mx-auto flex overflow-x-scroll no-scrollbar">
        {restaurants.map((restaurant) => (
          <Link
            href={`restaurants/${restaurant._id}`}
            className="m-2 "
            key={restaurant._id}
          >
            <div
              style={{
                backgroundImage: `url(${
                  !restaurant.images
                    ? "https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"
                    : restaurant.images[0].pathimages
                })`,
              }}
              className="w-[250px] h-[200px] bg-center bg-cover duration-500 "
            ></div>
            <h5 className="font-bold mt-1">{restaurant.localize.name[1]}</h5>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="text-orange-700 text-center text-xl">Loading....</div>
  );
};

export default Restaurant;
