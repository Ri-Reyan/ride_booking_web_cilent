import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useApp } from "../context/AppContext";

const LocationSearchPanel = () => {
  const { drop, carselect, setCarSelect } = useApp();

  return (
    <div>
      <h1 className="text-2xl font-bold mx-4 mt-2">Select Location</h1>
      <div
        onClick={() => setCarSelect(!carselect)}
        className="p-4 flex flex-row w-full gap-4 place-items-center mt-5"
      >
        <IoLocationSharp className="w-auto h-8 rounded-full bg-[#eee]" />
        <h4 className="text-lg font-semibold">{drop}</h4>
      </div>
      <div
        onClick={() => setCarSelect(!carselect)}
        className="p-4 flex flex-row w-full gap-4 place-items-center my-2"
      >
        <IoLocationSharp className="w-auto h-8 rounded-full bg-[#eee]" />
        <h4 className="text-lg font-semibold">Gazipur Sadar,Gazipur,Dhaka</h4>
      </div>
      <div
        onClick={() => setCarSelect(!carselect)}
        className="p-4 flex flex-row w-full gap-4 place-items-center my-2"
      >
        <IoLocationSharp className="w-auto h-8 rounded-full bg-[#eee]" />
        <h4 className="text-lg font-semibold">Gazipur Sadar,Gazipur,Dhaka</h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
