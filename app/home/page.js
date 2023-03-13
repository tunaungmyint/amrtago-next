import React from "react";
import Banner from "../components/Banner";
import Hotel from "../components/Hotels";
import Restaurant from "../components/Restaurants";
import Town from "../components/Town";
import Footer from "../components/Footer";
import Attraction from "../components/Attractions";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Town />
      <Attraction />
      <Hotel />
      <Restaurant />
      <Footer />
    </div>
  );
}
