"use client";
import { useEffect, useState } from "react";
import Hotel from "./Hotels";

function Latlong() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {latitude && longitude && (
        <Hotel latitude={latitude} longitude={longitude} />
      )}
    </div>
  );
}

export default Latlong;
