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

  const cardBase =
    "flex items-center gap-4 border-2 rounded-xl p-3 mb-3 transition-all cursor-pointer hover:border-yellow-600";

  return (
    <div className="p-4 w-full max-w-[600px] mx-auto">
      <IoIosArrowBack
        onClick={() => setCarSelect(!carselect)}
        size={28}
        className="cursor-pointer mb-4"
      />

      {/* Car Option */}
      <div onClick={() => handleSelect("car")} className={`${cardBase}`}>
        <img
          className="w-20 h-auto object-contain sm:w-24"
          src={car}
          alt="Uber Car"
        />

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <h1 className="text-base sm:text-lg font-semibold">UberGo</h1>
            <p className="text-base sm:text-lg font-semibold">$193.20</p>
          </div>
          <p className="text-sm text-gray-500">2 mins away</p>
          <p className="text-sm text-gray-500">Affordable compact rides</p>
        </div>
      </div>

      {/* Moto Option */}
      <div onClick={() => handleSelect("moto")} className={`${cardBase}`}>
        <img
          className="w-20 h-auto object-contain sm:w-24"
          src={moto}
          alt="Uber Moto"
        />

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <h1 className="text-base sm:text-lg font-semibold">Moto</h1>
            <p className="text-base sm:text-lg font-semibold">$100.20</p>
          </div>
          <p className="text-sm text-gray-500">3 mins away</p>
          <p className="text-sm text-gray-500">Affordable motorcycle rides</p>
        </div>
      </div>

      {/* Auto Option */}
      <div onClick={() => handleSelect("auto")} className={`${cardBase}`}>
        <img
          className="w-20 h-auto object-contain sm:w-24"
          src={auto}
          alt="Uber Auto"
        />

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <h1 className="text-base sm:text-lg font-semibold">Auto</h1>
            <p className="text-base sm:text-lg font-semibold">$60.20</p>
          </div>
          <p className="text-sm text-gray-500">6 mins away</p>
          <p className="text-sm text-gray-500">Affordable auto rides</p>
        </div>
      </div>
    </div>
  );
};

export default CarSelectPage;
