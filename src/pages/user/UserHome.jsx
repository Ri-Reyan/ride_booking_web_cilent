import React, { useRef } from "react";
import uber from "../../assets/images/Uber_logo_2018.png";
import map from "../../assets/images/map.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../../components/LocationSearchPanel";
import CarSelectPage from "../../components/CarSelectPage";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
  const { pickup, setPickup, drop, setDrop, carselect } = useApp();
  const panelRef = useRef(null);
  const navigate = useNavigate();

  // GSAP panel animation
  useGSAP(
    () => {
      if (pickup && drop) {
        gsap.to(panelRef.current, {
          height: "55vh",
          duration: 0.35,
          ease: "power2.out",
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0vh",
          duration: 0.35,
          ease: "power2.inOut",
        });
      }
    },
    { dependencies: [pickup, drop] }
  );

  return (
    <div className="min-h-full w-full overflow-x-hidden relative bg-gray-50">
      {/* Map Background */}
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${map})` }}
      >
        {/* Top Logo */}
        <div className="p-4">
          <img
            src={uber}
            alt="Uber logo"
            className="h-10 sm:h-12 md:h-16 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Trip Form */}
        <div className="mt-2 px-4 max-w-xl w-full mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            Find a trip
          </h1>
          <form className="flex flex-col mt-4 w-full gap-4">
            <input
              className="h-14 w-full bg-white rounded-lg text-lg sm:text-xl font-medium px-4 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Pick-up location"
              required
            />
            <input
              className="h-14 w-full bg-white rounded-lg text-lg sm:text-xl font-medium px-4 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="Drop location"
              required
            />
          </form>
        </div>

        {/* GSAP Animated Bottom Panel */}
        <div
          ref={panelRef}
          className="w-full absolute bottom-0 bg-white overflow-hidden shadow-2xl rounded-t-3xl
          "
        >
          <div className="max-w-xl mx-auto p-4">
            {carselect ? <CarSelectPage /> : <LocationSearchPanel />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
