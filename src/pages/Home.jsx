import React from "react";
import image from "../assets/image.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[89vh] relative">
      <img src={image} alt="" className="w-full h-full object-cover " />
      <div className="absolute bg-white top-48 left-0 right-0 text-center mx-auto pb-2">
        <h1 className="text-4xl font-bold text-blue-500  p-4">
          Welcome to WTS CRUD
        </h1>
        <p className=" font-bold text-gray-500 bg-white p-2 ">
          Welcome to our platform! To get started on your journey, you have the
          option to either register for a new account or sign in using the
          following credentials: <br />{" "}
          <span className="text-green-500">
            Email: john@hotmail.com & Password: 12345
          </span>
        </p>
        <Link to="/signin">
          <button className="px-8 py-2 bg-blue-800 text-white rounded-lg">
            Signin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
