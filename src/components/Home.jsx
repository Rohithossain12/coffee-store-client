import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="mt-10 mb-10 ">
      <h1 className="text-3xl text-center font-bold">Our Popular Products</h1>
      <div className="text-center mt-4">
        <Link to="/addCoffee" className="btn bg-[#D2B48C] font-bold text-white">
          Add Coffee
        </Link>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-4  container mx-auto px-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
