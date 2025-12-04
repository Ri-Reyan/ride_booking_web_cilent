import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useApp } from "../context/AppContext";

const LocationSearchPanel = () => {
  const { drop, carselect, setCarSelect } = useApp();

  const handleSelect = () => setCarSelect(!carselect);

  const locations = [
    drop,
    "Milestone,Bhawal Mirzapur",
    "Bhawal Mirzapur, Gazipur",
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4">
      {/* Header */}
      <h1 className="text-xl md:text-2xl font-bold mt-2">Select Location</h1>

      {/* List */}
      <div className="mt-4 space-y-3">
        {locations.map((loc, i) => (
          <div
            key={i}
            onClick={handleSelect}
            className="
              flex items-center gap-4 p-4 rounded-xl 
              bg-white shadow-sm border border-gray-200
              active:scale-[0.98] transition
              hover:border-gray-400 cursor-pointer
            "
          >
            <IoLocationSharp className="min-w-[40px] h-10 p-2 rounded-full bg-[#eee]" />

            <h4 className="text-base md:text-lg font-semibold leading-snug break-words">
              {loc}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSearchPanel;
