import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      price,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    // sent data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="mt-10 mb-10 bg-[#F4F3F0] container mx-auto rounded-lg">
      <div className="card   shrink-0 p-16">
        <h1 className="text-[#374151] text-4xl font-bold text-center">
          Add New Coffee
        </h1>

        <p className="text-center mt-5">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee} className="card-body">
          {/* name and chef row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter coffee Price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* supplier and taste row */}

          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee taste"
                name="taste"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* category and details row
           */}

          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee category"
                name="category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C] font-bold">Add Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
