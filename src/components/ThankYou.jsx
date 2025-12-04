import Lottie from "lottie-react";
import React from "react";
import thanks from "../assets/animations/Thank you.json";
import uber from "../assets/images/Uber_logo_2018.png";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-4 md:p-8">
      {/* Logo */}
      <div className="w-full max-w-4xl">
        <img
          onClick={() => navigate("/user-home")}
          className="h-8 md:h-12 cursor-pointer"
          src={uber}
          alt="Uber Logo"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full mt-10 md:mt-16 max-w-lg">
        <div className="w-56 h-56 md:w-72 md:h-72">
          <Lottie animationData={thanks} loop={true} />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-center mt-6">
          Thank You
        </h1>

        <p className="text-center text-gray-600 mt-2 text-base md:text-lg px-2">
          Your ride has been successfully booked. Enjoy your trip!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
