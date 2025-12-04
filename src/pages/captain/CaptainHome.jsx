import React from "react";
import uber from "../../assets/images/Uber_logo_2018.png";
import { useNavigate } from "react-router-dom";

const CaptainHome = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gray-50 px-4 pt-6">
      {/* Top Logo */}
      <div className="w-full max-w-xl">
        <img
          onClick={() => navigate("/")}
          className="h-12 md:h-16 cursor-pointer"
          src={uber}
          alt="Uber logo"
        />
      </div>

      {/* Placeholder content */}
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center">
          Coming Soon
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-500 text-center max-w-md">
          Your Captain dashboard is on the way!
        </p>
      </div>
    </div>
  );
};

export default CaptainHome;
