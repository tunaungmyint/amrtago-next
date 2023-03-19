"use client";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

const Towns = ({ params }) => {
  const [hotels, setHotels] = useState({});
  const townname = params.townname;
  const [placetype, setPlacetype] = useState("Hotel");

  const setHotelType = () => {
    setPlacetype("Hotel");
  };
  const setRestType = () => {
    setPlacetype("Rest");
  };
  const setPlacelType = () => {
    setPlacetype("Place");
  };

  const url1 = `https://amrtago.com/place/getplacebytownbyplacetype/${townname}/${placetype}`;

  async function getHotels() {
    const response = await fetch(url1);
    const hotels = await response.json();

    setHotels(hotels);
  }

  useEffect(() => {
    getHotels();
    // eslint-disable-next-line
  }, [placetype]);
  const { places, count } = hotels;
  return places ? (
    <div className="p-4 m-2 ">
      <div className="flex justify-end items-center gap-1">
        <div
          className="cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={setHotelType}
        >
          Hotels
        </div>{" "}
        |
        <div
          className="cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={setRestType}
        >
          Restaurants
        </div>{" "}
        |
        <div
          className="cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={setPlacelType}
        >
          Attractions
        </div>
      </div>
      <div className="flex justify-between">
        <h4 className="">{townname}</h4>
        <h4 className="text-gray-700">
          {count}{" "}
          {(placetype === "Hotel" && "Hotels") ||
            (placetype === "Rest" && "Restaurants") ||
            (placetype === "Place" && "Attractions")}
        </h4>
      </div>

      {places.map((hotel) => (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-4 mx-auto shadow-md">
          <div className="max-w-[380px] h-[320px] " key={hotel._id}>
            <img
              src={
                !hotel.images
                  ? "https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"
                  : hotel.images[0].pathimages
              }
              alt={hotel._id}
              className="w-full h-full p-2"
            />
          </div>
          <div className="lg:col-span-2 px-10">
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
  ) : (
    <div className="text-orange-700 text-center text-xl">Loading....</div>
  );
};

export default Towns;
