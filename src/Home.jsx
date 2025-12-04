import React from "react";
import uber from "./assets/images/uber-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full overflow-x-hidden">
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen">
        <img
          onClick={() => navigate("/")}
          className="h-28 px-4 lg:h-40 lg:px-16"
          src={uber}
          alt=""
        />
        <div className=" w-full h-[150px] bg-white mt-[70vh] place-content-center place-items-center">
          <h1 className="text-2xl font-semibold">Get started with Uber</h1>
          <button
            onClick={() => navigate("/user-login")}
            className="h-10 w-1/2 p-2 text-lg font-medium mt-4 mx-24 rounded text-white bg-black lg:mx-80"
            to="/userlogin"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
