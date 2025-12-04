import React, { useRef, useEffect } from "react";
import uber from "../../assets/images/Uber_logo_2018.png";
import map from "../../assets/images/map.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../../components/LocationSearchPanel";
import CarSelectPage from "../../components/CarSelectPage";
import { useApp } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
  const app = useApp();
  const { pickup, setPickup, drop, setDrop, carselect } = app;
  const panelRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      if (pickup.length > 0 && drop.length > 0) {
        gsap.to(panelRef.current, {
          height: "40%",
          duration: 0.3,
          display: "block",
          ease: "power2.out",
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          display: "none",
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    },
    { dependencies: [pickup, drop] }
  );

  return (
    <div className="h-screen w-full p-0 overflow-x-hidden relative">
      <div
        className="bg-cover bg-center bg-no-repeat h-full w-full"
        style={{ backgroundImage: `url(${map})` }}
      >
        <img
          onClick={() => navigate("/")}
          className="h-16 p-4"
          src={uber}
          alt="Uber logo"
        />

        {/* Trip Form (NO ABSOLUTE POSITIONING) */}
        <div className="w-full bg-transparent">
          <h1 className="text-2xl font-semibold px-4 mt-4">Find a trip</h1>
          <form className="flex flex-col p-4">
            <input
              className="h-14 w-full bg-[#eeeeee] rounded text-lg font-medium px-4 mt-2 mb-2 focus:outline-none"
              type="text"
              name="pickup"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Pick-up location"
              required
            />
            <input
              className="h-14 w-full bg-[#eeeeee] rounded text-lg font-medium px-4 mt-4 mb-2 focus:outline-none"
              type="text"
              name="drop"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="Drop location"
              required
            />
          </form>
        </div>

        {/* GSAP Bottom Panel (Only absolute element) */}
        <div
          ref={panelRef}
          className="w-full absolute bottom-0 bg-white overflow-hidden"
        >
          {carselect ? <CarSelectPage /> : <LocationSearchPanel />}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
