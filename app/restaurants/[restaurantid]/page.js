"use client";
import { useState, useEffect } from "react";

const Singlerestaurant = ({ params }) => {
  const restaurantid = params.restaurantid;
  const [restaurant, setRestaurant] = useState();
  async function getRestaurant() {
    const response = await fetch(
      `https://amrta-api.vercel.app/place/${restaurantid}`
    );
    const restaurant = await response.json();

    setRestaurant(restaurant);
  }
  useEffect(() => {
    getRestaurant();
    // eslint-disable-next-line
  }, []);

  return restaurant ? (
    <div className="p-4 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-[450px] h-[350px] ">
          <img
            src={restaurant.images[0].pathimages}
            alt={restaurant._id}
            className="w-full h-full p-2"
          />
        </div>
        <div>
          <h3>{restaurant.localize.name[1]}</h3>
          <p>{restaurant.localize.description[1]}</p>
          <h5 className="text-green-600 font-bold text-sm">
            {restaurant.localize.address[1].fulladdress}၊
            {restaurant.localize.address[1].stateanddiv}
          </h5>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-orange-700 text-center text-xl">Loading ....</div>
  );
};

export default Singlerestaurant;
