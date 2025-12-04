import React from "react";
import uber from "../../assets/images/Uber_logo_2018.png";
import moto from "../../assets/images/uberMoto.png";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { IoPricetags } from "react-icons/io5";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const ConfirmMoto = () => {
  const { pickup, drop } = useApp();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col px-4 sm:px-6 lg:px-16 py-6">
      {/* Logo */}
      <div className="flex justify-start">
        <img
          onClick={() => navigate("/user-home")}
          className="h-10 sm:h-12 cursor-pointer"
          src={uber}
          alt="Uber Logo"
        />
      </div>

      {/* Ride Info */}
      <div className="flex flex-col items-center mt-8 sm:mt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          Confirm your Ride
        </h1>
        <img
          className="mt-4 w-48 sm:w-60 md:w-72 h-auto"
          src={moto}
          alt="Uber Moto"
        />
      </div>

      {/* Pickup */}
      <div className="flex flex-row items-center justify-center gap-4 mt-6 sm:mt-8">
        <FaLocationDot className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
        <h1 className="text-lg sm:text-2xl md:text-3xl font-medium">
          {pickup}
        </h1>
      </div>

      {/* Drop */}
      <div className="flex flex-row items-center justify-center gap-4 mt-4 sm:mt-6">
        <FaMapLocationDot className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
        <h1 className="text-lg sm:text-2xl md:text-3xl font-medium">{drop}</h1>
      </div>

      {/* Price */}
      <div className="flex flex-row items-center justify-center gap-8 sm:gap-12 mt-4 sm:mt-6">
        <IoPricetags className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
        <h1 className="text-lg sm:text-2xl md:text-3xl font-medium">
          $ 100.20
        </h1>
      </div>

      {/* Confirm Button */}
      <div className="mt-6 sm:mt-8 w-full max-w-md mx-auto">
        <button
          onClick={() => navigate("/thankyou")}
          className="w-full bg-black text-white font-semibold text-lg sm:text-xl md:text-2xl py-3 sm:py-4 rounded-lg hover:scale-95 transition-transform"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmMoto;
