"use client";
import { useRef, useState, useEffect } from "react";
import { townname } from "@/utils/townname";

const Restaurants = () => {
  const [hotels, setHotels] = useState([]);
  const [town, setTown] = useState("Yangon");
  const townref = useRef();
  const handleClick = () => {
    setTown(townref.current.value);
  };

  const url = `https://amrtago.com/place/getplacebytownbyplacetype/${town}/Rest`;

  async function getHotels() {
    const response = await fetch(url);
    const hotels = await response.json();

    setHotels(hotels);
  }

  useEffect(() => {
    getHotels();
    // eslint-disable-next-line
  }, [town]);
  const { places, count } = hotels;
  console.log(count, places);
  return places ? (
    <div className="p-4 m-2">
      <div className="text-center ">
        <span className="text-lg">Restaurants from </span>
        <input
          type="text"
          ref={townref}
          placeholder="eg. Yangon or Mandalay"
          autoComplete="on"
          list="town"
          className="px-4 py-2 mr-2 outline-none text-gray-700  border-b-2 border-green-700"
        />
        <datalist id="town">
          {townname.map((town) => (
            <option key={town.id} value={town.name} />
          ))}
        </datalist>
        <button onClick={handleClick}>Search</button>
        <div className="flex items-center justify-between">
          <h3>{town}</h3>
          <h4>{count} Restaurants</h4>
        </div>
      </div>

      <div>
        {places.map((hotel) => (
          <div
            key={hotel._id}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-8 shadow-lg"
          >
            <div className="max-w-[380px] h-[320px]">
              <img
                src={
                  !hotel.images
                    ? "https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"
                    : hotel.images[0].pathimages
                }
                alt={hotel._id}
                className="w-full h-full"
              />
            </div>
            <div className="lg:col-span-2 px-2">
              <h3>{hotel.localize.name[1]}</h3>
              <p>{hotel.localize.description[1]}</p>
              <h5 className="text-green-600 font-bold text-sm">
                {hotel.localize.address[1].fulladdress}၊
                {hotel.localize.address[1].stateanddiv}
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

export default Restaurants;
