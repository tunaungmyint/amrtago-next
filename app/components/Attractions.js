"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
const url = `https://amrta-api.vercel.app/place/nearbytype/96.0891/21.9588/Place`;

const Attraction = () => {
  const [attractions, setAttractions] = useState([]);
  // const fallbackimage = `${"https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"}`;

  async function getAttractions() {
    const response = await fetch(url);
    const attractions = await response.json();
    console.log(attractions);
    setAttractions(attractions);
  }

  useEffect(() => {
    getAttractions();
  }, []);
  return attractions ? (
    <div>
      <div>
        <h5 className="text-gray-700 font-bold mx-4">
          Attractions in your area
        </h5>
      </div>
      <div className="max-w-[1400px] h-[280px] w-full p-2   mx-auto flex overflow-x-scroll no-scrollbar">
        {attractions.map((attraction) => (
          <Link href={`attractions/${attraction._id}`} className="m-2 ">
            <div
              key={attraction._id}
              style={{
                backgroundImage: `url(${
                  !attraction.images
                    ? "https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"
                    : attraction.images[0].pathimages
                })`,
              }}
              className="w-[250px] h-[200px] bg-center bg-cover duration-500 "
            ></div>
            <h5 className="font-bold mt-1">{attraction.localize.name[1]}</h5>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="text-orange-700 text-center text-xl">Loading....</div>
  );
};

export default Attraction;
