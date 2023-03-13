"use client";
import { useState, useEffect } from "react";

const Singleattraction = ({ params }) => {
  const attractionid = params.attractionid;
  const [attraction, setAttraction] = useState();
  async function getAttraction() {
    const response = await fetch(
      `https://amrta-api.vercel.app/place/${attractionid}`
    );
    const attraction = await response.json();

    setAttraction(attraction);
  }
  useEffect(() => {
    getAttraction();
    // eslint-disable-next-line
  }, []);

  return attraction ? (
    <div className="p-4 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-[450px] h-[350px] ">
          <img
            src={attraction.images[0].pathimages}
            alt={attraction._id}
            className="w-full h-full p-2"
          />
        </div>
        <div>
          <h3>{attraction.localize.name[1]}</h3>
          <p>{attraction.localize.description[1]}</p>
          <h5 className="text-green-600 font-bold text-sm">
            {attraction.localize.address[1].fulladdress}၊
            {attraction.localize.address[1].stateanddiv}
          </h5>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-orange-700 text-center text-xl">Loading ....</div>
  );
};

export default Singleattraction;
