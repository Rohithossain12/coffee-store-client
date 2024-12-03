import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result);
        const createAt = result.user?.metadata?.creationTime;
        const newUser = { name, email, createAt };
        // set new user to the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Register!",
                text: "User Register has been Successfully.",
                icon: "success",
              });
            }
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="mt-10 mb-10 p-5 max-w-lg mx-auto rounded-lg bg-[#F4F3F0]">
      <h1 className="text-2xl font-bold ml-8">Please Register Now </h1>
      <form onSubmit={handleRegister} className="card-body ">
        <div className="form-control max-w-lg ">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control max-w-lg ">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control max-w-lg ">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter coffee Price"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="max-w-lg mt-6">
          <button className="btn bg-[#D2B48C] w-full  font-bold">
            Register
          </button>
        </div>
      </form>
      <p className="ml-8 font-bold">
        You have an Already Account ?{" "}
        <Link to="/login" className="text-red-500">
          Please Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
