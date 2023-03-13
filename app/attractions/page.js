"use client";
import { useRef, useState, useEffect } from "react";

const Attractions = () => {
  const [attractions, setAttractions] = useState([]);
  const [town, setTown] = useState("Yangon");
  const townref = useRef();
  const handleClick = () => {
    setTown(townref.current.value);
  };

  const url = `https://amrta-api.vercel.app/place/getplacebytownbyplacetype/${town}/Place`;

  async function getAttractions() {
    const response = await fetch(url);
    const attractions = await response.json();

    setAttractions(attractions);
  }

  useEffect(() => {
    getAttractions();
    // eslint-disable-next-line
  }, [town]);
  const { places, count } = attractions;
  console.log(count, places);
  return places ? (
    <div className="p-4 m-2">
      <div className="text-center ">
        <span className="text-lg">Attractions from </span>
        <input
          type="text"
          ref={townref}
          placeholder="eg. Yangon or Mandalay"
          autoComplete="on"
          className="px-4 py-2 mr-2 outline-none text-gray-700  border-b-2 border-green-700"
        />
        <button onClick={handleClick}>Search</button>
        <div className="flex items-center justify-between">
          <h3>{town}</h3>
          <h4>{count} Attractions</h4>
        </div>
      </div>

      <div>
        {places.map((attraction) => (
          <div
            key={attraction._id}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-8 shadow-lg"
          >
            <div className="max-w-[380px] h-[320px]">
              <img
                src={
                  !attraction.images
                    ? "https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"
                    : attraction.images[0].pathimages
                }
                alt={attraction._id}
                className="w-full h-full"
              />
            </div>
            <div className="lg:col-span-2 px-10">
              <h3>{attraction.localize.name[1]}</h3>
              <p>{attraction.localize.description[1]}</p>
              <h5 className="text-green-600 font-bold text-sm">
                {attraction.localize.address[1].fulladdress}၊
                {attraction.localize.address[1].stateanddiv}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="text-orange-700 text-center text-xl">Loading....</div>
  );
};

export default Attractions;
