"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";
// import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1>
          <Link href="/">
            <span className="text-orange-700">AMRTA</span>
            <span className="text-blue-800">GO</span>{" "}
          </Link>
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="hotels">Hotels </Link>
        </li>
        <li>
          <Link href="restaurants">Restaurants </Link>
        </li>
        <li>
          <Link href="attractions">Attractions </Link>{" "}
        </li>
        <li>
          <Link href="about">About Us </Link>
        </li>
        <li>
          <Link href="contact">Contact Us</Link>{" "}
        </li>
      </ul>
      <div className="hidden md:flex">
        <Link href="user">
          <BsPerson size={20} />
        </Link>
      </div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-20">
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>
      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100 px-4 py-5 flex flex-col h-full z-10"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>AMRTAGO</h1>
          <li className="border-b-4 border-gray-400">
            <Link href="/">Home</Link>{" "}
          </li>
          <li className="border-b-4 border-gray-400">
            <Link href="hotels">Hotels</Link>
          </li>
          <li className="border-b-4 border-gray-400">
            <Link href="restaurants"> Restrauants</Link>
          </li>
          <li className="border-b-4 border-gray-400">
            <Link href="attractions">Attractions</Link>
          </li>
          <li className="border-b-4 border-gray-400">
            <Link href="about">About Us</Link>{" "}
          </li>
          <li className="border-b-4 border-gray-400">
            <Link href="contact">Contact Us </Link>
          </li>
          <Link href="user">
            <div className="flex flex-col">
              {/* <buthrefn className="my-6">Search</buthrefn> */}

              <button className="my-6">Account</button>
            </div>
          </Link>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}
