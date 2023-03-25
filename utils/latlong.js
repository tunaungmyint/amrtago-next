"use client";
import { useEffect, useState } from "react";

export default function latlong() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  });
  console.log(lat, long);
}
