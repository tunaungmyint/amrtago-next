// "use client";
// import { useState, useEffect } from "react";
import Link from "next/link";
const url = `https://amrta-api.vercel.app/townimage`;

async function getTowns() {
  const towns = await fetch(url);
  return await towns.json();
}

const Town = async () => {
  const towns = await getTowns();
  // const [towns, setTowns] = useState([]);

  // async function getTowns() {
  //   const response = await fetch(url);
  //   const towns = await response.json();

  //   setTowns(towns);
  // }

  // useEffect(() => {
  //   getTowns();
  // }, []);
  return (
    <div>
      <div>
        <h5 className="text-gray-700 font-bold mx-4">
          Popular destinations of Myanmar
        </h5>
      </div>
      <div className="max-w-[1400px] h-[280px] w-full p-2   mx-auto flex overflow-x-scroll no-scrollbar">
        {towns.map((town) => (
          <Link href={`town/${town.name}`} className="m-2 " key={town._id}>
            <div
              key={town._id}
              style={{
                backgroundImage: `url(${town.image})`,
              }}
              className="w-[250px] h-[200px] bg-center bg-cover duration-500 "
            ></div>
            <h5 className="font-bold mt-1">{town.name}</h5>
            <h5 className="font-bold mt-1 text-sm text-gray-700">
              {town.count} properties
            </h5>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Town;
