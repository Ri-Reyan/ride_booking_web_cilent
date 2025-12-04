import React from "react";
import uber from "../../assets/images/Uber_logo_2018.png";
import auto from "../../assets/images/uberAuto.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoPricetags } from "react-icons/io5";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const ConfirmAuto = () => {
  const { pickup, drop } = useApp();
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <div>
        <img className="h-10" src={uber} alt="" />
      </div>

      <div className="mt-12">
        <h1 className="text-3xl text-center font-semibold">
          Confirm your Ride
        </h1>
        <img src={auto} alt="Uber car" />
      </div>

      <div className="flex flex-row place-items-center place-content-center gap-4 mb-2">
        <FaLocationDot size={"30px"} />
        <h1 className="text-4xl font-medium ">{pickup}</h1>
      </div>

      <div className="flex flex-row place-items-center place-content-center gap-4 mt-4 mb-3">
        <FaMapLocationDot size={"30px"} />
        <h1 className="text-4xl font-medium ">{drop}</h1>
      </div>

      <div className="flex flex-row place-items-center place-content-center gap-24 mt-4 mb-3">
        <IoPricetags size={"30px"} />
        <h1 className="text-4xl font-medium ">$ 60.20</h1>
      </div>

      <div>
        <button
          onClick={() => navigate("/thankyou")}
          className="bg-black w-full h-auto text-2xl font-semibold rounded-lg text-white mt-4"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmAuto;
