import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        // update last login time

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        // fetch(`http://localhost:5000/users/${email}`)
        fetch(`https://coffee-store-server-three-ruddy.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="mt-10 mb-10 p-5 max-w-lg mx-auto rounded-lg bg-[#F4F3F0]">
      <h1 className="text-2xl font-bold ml-8">Please Login Now </h1>
      <form onSubmit={handleLogin} className="card-body ">
        {/* name and chef row */}

        <div className="form-control max-w-lg ">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="text"
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
            placeholder="Enter Your Password"
            className="input input-bordered w-full"
            required
          />
        </div>
        <label className="label">
          <a href="#" className="label-text-alt font-bold link link-hover">
            Forgot password?
          </a>
        </label>
        <div className="max-w-lg mt-6">
          <button className="btn bg-[#D2B48C] w-full  font-bold">Login</button>
        </div>
      </form>
      <p className="ml-8 font-bold">
        You don't have Account ?{" "}
        <Link className="text-red-500" to="/register">
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
