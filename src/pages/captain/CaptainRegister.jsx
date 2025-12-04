import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uber from "../../assets/images/Uber_logo_2018.png";
import eye from "../../assets/animations/Eye.json";
import Lottie from "lottie-react";
import axios from "axios";

const CaptainRegister = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/captain/register`,
      {
        fullname: {
          firstname,
          lastname,
        },
        email,
        password,
        vehicle: {
          color,
          plate,
          capacity,
          vehicleType,
        },
      },
      { withCredentials: true }
    );

    if (response.status === 200) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setColor("");
      setCapacity("");
      setVehicleType("");
      setPlate("");
    }
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden p-4 right-2">
      <div>
        <img onClick={() => navigate("/")} className="h-10" src={uber} alt="" />
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold mt-4">What's your name</h3>
          <div className="w-full flex gap-2">
            <input
              className="h-14 w-1/2 bg-[#eeeeee] text-lg p-3 rounded mt-4 mb-2 focus:outline-none"
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First name"
            />
            <input
              className="h-14 w-1/2 bg-[#eeeeee] text-lg p-3 rounded mt-4 mb-2 focus:outline-none"
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last name"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4">What's your email</h3>
          <input
            className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded mt-4 mb-2 focus:outline-none"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
          />
          <h3 className="text-xl font-semibold mt-4">Enter password</h3>
          <div className="mt-4">
            <input
              className="h-14 p-3 w-full rounded bg-[#eeeeee] focus:outline-none"
              type={show ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
            />
            <Lottie
              onClick={() => setShow(!show)}
              className="h-10 relative bottom-12 left-36"
              animationData={eye}
              loop={true}
            />
          </div>
          <h3 className="text-xl font-semibold mt-4">Vehical information</h3>
          <div className="flex gap-2">
            <div className="">
              <input
                className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded mt-4 mb-2 focus:outline-none"
                type="text"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
                placeholder="Color"
              />

              <input
                className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded mt-4 mb-2 focus:outline-none"
                type="text"
                name="plate"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                required
                placeholder="Plate"
              />
            </div>
            <div>
              <input
                className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded mt-4 mb-2 focus:outline-none"
                type="text"
                name="capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                required
                placeholder="Capacity"
              />

              <select
                className="border w-full bg-[#eeeeee] text-lg mt-4 h-14 border-gray-300 rounded p-3 focus:outline-none"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option
                  className="text-sm font-normal tracking-tighter bg-black  text-white rounded"
                  value="car"
                >
                  Car
                </option>
                <option
                  className="text-sm font-normal tracking-tighter bg-black text-white rounded"
                  value="motorcycle"
                >
                  Motorcycle
                </option>
                <option
                  className="text-sm font-normal tracking-tighter bg-black text-white rounded"
                  value="auto"
                >
                  Auto
                </option>
              </select>
            </div>
          </div>
          <button className="h-14 w-full  text-center text-xl font-semibold bg-black text-white mt-6 rounded hover:scale-90">
            Sign Up
          </button>
        </form>
      </div>
      <div>
        <h1
          onClick={() => navigate("/captain-login")}
          className="text-center text-lg font-normal tracking-tight"
        >
          Already have an account?{" "}
          <span className="text-blue-600">Login instead</span>
        </h1>
      </div>

      <h1 className="mt-[10vh] text-[12px] font-normal tracking-tighter text-center">
        By proceeding, you consent to get calls, WhatsApp or SMS messages,
        including by automated means, from Uber & its affiliates to the number
        provided
      </h1>
    </div>
  );
};

export default CaptainRegister;
