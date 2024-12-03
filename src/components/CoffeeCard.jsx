import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, supplier, taste, category, details, photo } =
    coffee || {};

  const handleDelete = (id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-three-ruddy.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffees.filter((cof) => cof._id !== id);

              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-[#F4F3F0] p-4">
      <figure>
        <img src={photo} alt="Coffee" />
      </figure>
      <div className=" flex justify-between items-center w-full ml-5 ">
        <div>
          <h2 className="card-title">Name : {name}</h2>
          <p>Price : {price}</p>
          <p>Supplier : {supplier}</p>
          <p>Taste : {taste}</p>
          <p>Category : {category}</p>
        </div>

        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item bg-[#D2B48C]">View Details</button>
            <Link
              to={`/updateCoffee/${_id}`}
              className="btn join-item bg-[#D2B48C]"
            >
              Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-[#D2B48C]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
