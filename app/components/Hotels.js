// "use client";
// import { useEffect, useState } from "react";

// import Link from "next/link";
// const url = `https://amrta-api.vercel.app/place/nearbytype/96.0891/21.9588/Hotel`;

// const Hotel = () => {
//   const [hotels, setHotels] = useState([]);
//   // const fallbackimage = `${"https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"}`;

//   async function getHotels() {
//     const response = await fetch(url);
//     const hotels = await response.json();
//     console.log(hotels);
//     setHotels(hotels);
//   }

//   useEffect(() => {
//     getHotels();
//   }, []);
//   return hotels ? (
//     <div>
//       <div>
//         <h5 className="text-gray-700 font-bold mx-4">Hotels in your area</h5>
//       </div>
//       <div className="max-w-[1400px] h-[280px] w-full p-2   mx-auto flex overflow-x-scroll no-scrollbar">
//         {hotels.map((hotel) => (
//           <Link href={`hotels/${hotel._id}`} className="m-2 ">
//             <div
//               key={hotel._id}
//               style={{
//                 backgroundImage: `url(${
//                   !hotel.images
//                     ? "https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"
//                     : hotel.images[0].pathimages
//                 })`,
//               }}
//               className="w-[250px] h-[200px] bg-center bg-cover duration-500 "
//             ></div>
//             <h5 className="font-bold mt-1">{hotel.localize.name[1]}</h5>
//           </Link>
//         ))}
//       </div>
//     </div>
//   ) : (
//     <div className="text-orange-700 text-center text-xl">Loading....</div>
//   );
// };

// export default Hotel;

import Link from "next/link";
import Latlong from "./Latlong";

// const url = `https://amrtago.com/place/nearbytype/96.0891/21.9588/Hotel`;

// 96.0891/21.9588

// async function getHotels() {
//   const hotels = await fetch(
//     `https://amrtago.com/place/nearbytype/96.0891/21.9588/Hotel`
//   );
//   return await hotels.json();
// }

const Hotel = async () => {
  async function getHotels() {
    const hotels = await fetch(
      `https://amrtago.com/place/nearbytype/96.0891/21.9588/Hotel`
    );
    return await hotels.json();
  }

  const hotels = await getHotels();

  return hotels ? (
    <div>
      <div>
        <h5 className="text-gray-700 font-bold mx-4">Hotels in your area</h5>
      </div>
      <div className="max-w-[1400px] h-[280px] w-full p-2   mx-auto flex overflow-x-scroll no-scrollbar">
        {hotels &&
          hotels.map((hotel) => (
            <Link href={`hotels/${hotel._id}`} className="m-2 " key={hotel._id}>
              <div
                style={{
                  backgroundImage: `url(${
                    !hotel.images
                      ? "https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"
                      : hotel.images[0].pathimages
                  })`,
                }}
                className="w-[250px] h-[200px] bg-center bg-cover duration-500 "
              ></div>
              <h5 className="font-bold mt-1">{hotel.localize.name[1]}</h5>
            </Link>
          ))}
      </div>
    </div>
  ) : (
    <div className="text-orange-700 text-center text-xl">Loading....</div>
  );
};

export default Hotel;
