import Lottie from "lottie-react";
import React from "react";
import thanks from "../assets/animations/Thank you.json";
import uber from "../assets/images/Uber_logo_2018.png";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <div>
        <img
          onClick={() => navigate("/user-home")}
          className="h-10"
          src={uber}
          alt=""
        />
      </div>
      <div>
        <Lottie size={"40px"} animationData={thanks} loop={true} />

        <h1 className="text-4xl font-bold text-center">Thank You</h1>
      </div>
    </div>
  );
};

export default ThankYou;
