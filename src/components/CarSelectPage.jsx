import React from "react";
import auto from "../assets/images/uberAuto.png";
import car from "../assets/images/uberCar.png";
import moto from "../assets/images/uberMoto.png";
import { IoIosArrowBack } from "react-icons/io";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const CarSelectPage = () => {
  const { setConfirm, carselect, setCarSelect } = useApp();
  const navigate = useNavigate();

  const handleSelect = (type) => {
    setConfirm(type);
    navigate(`/confirm-${type}`);
  };

  return (
    <div className="p-2">
      <IoIosArrowBack onClick={() => setCarSelect(!carselect)} size={"30px"} />
      <div
        onClick={() => {
          handleSelect("car"), navigate("/confirm-car");
        }}
        className="flex flex-row h-16 w-full border-[2px] rounded-xl border-black gap-3 place-items-center p-2 mb-2 hover:border-yellow-600"
      >
        <img className="h-auto w-1/4" src={car} alt="Uber car Icon" />
        <div>
          <div className="flex flex-row gap-6 text-center">
            <h1 className="text-base font-semibold">UberGo</h1>
            <p className="text-base font-semibold">$ 193.20</p>
          </div>
          <h1 className="text-sm text-gray-500 font-semibold">2 mins away</h1>
          <h1 className="text-sm text-gray-500 font-semibold ">
            Affordable Compact rides
          </h1>
        </div>
      </div>
      <div
        onClick={() => {
          handleSelect("moto"), navigate("/confirm-moto");
        }}
        className="flex flex-row h-16 w-full border-[2px] rounded-xl border-black gap-3 place-items-center p-2 mb-2 hover:border-yellow-600"
      >
        <img className="h-auto w-1/4" src={moto} alt="Uber car Icon" />
        <div>
          <div className="flex flex-row gap-6 text-center">
            <h1 className="text-base font-semibold">Moto</h1>
            <p className="text-base font-semibold">$ 100.20</p>
          </div>
          <h1 className="text-sm text-gray-500 font-semibold">3 mins away</h1>
          <h1 className="text-sm text-gray-500 font-semibold ">
            Affordable Motorcycle rides
          </h1>
        </div>
      </div>
      <div
        onClick={() => {
          handleSelect("auto"), navigate("/confirm-auto");
        }}
        className="flex flex-row h-16 w-full border-[2px] rounded-xl border-black gap-3 place-items-center p-2 mb-2 hover:border-yellow-600"
      >
        <img className="h-auto w-1/4" src={auto} alt="Uber car Icon" />
        <div>
          <div className="flex flex-row gap-6 text-center">
            <h1 className="text-base font-semibold">Auto</h1>
            <p className="text-base font-semibold">$ 60.20</p>
          </div>
          <h1 className="text-sm text-gray-500 font-semibold">6 mins away</h1>
          <h1 className="text-sm text-gray-500 font-semibold ">
            Affordable Auto rides
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CarSelectPage;
