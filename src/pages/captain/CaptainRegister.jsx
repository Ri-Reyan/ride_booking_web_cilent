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
      navigate("/captain-home");
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
    <div className="min-h-screen w-full p-4 overflow-x-hidden">
      {/* Logo */}
      <div className="w-full max-w-[500px] mx-auto">
        <img
          onClick={() => navigate("/")}
          className="h-12 cursor-pointer"
          src={uber}
          alt="logo"
        />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-[500px] mx-auto mt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Section */}
          <div>
            <h3 className="text-xl font-semibold">What's your name</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <input
                className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded focus:outline-none"
                type="text"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="First name"
              />
              <input
                className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded focus:outline-none"
                type="text"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Last name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-xl font-semibold">What's your email</h3>
            <input
              className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded mt-3 focus:outline-none"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email"
            />
          </div>

          {/* Password */}
          <div>
            <h3 className="text-xl font-semibold">Enter password</h3>

            <div className="relative mt-3">
              <input
                className="h-14 p-3 w-full rounded bg-[#eeeeee] focus:outline-none"
                type={show ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password"
              />

              <div className="absolute right-3 top-3 h-8 w-8 cursor-pointer">
                <Lottie
                  onClick={() => setShow(!show)}
                  animationData={eye}
                  loop
                />
              </div>
            </div>
          </div>

          {/* Vehicle Info */}
          <div>
            <h3 className="text-xl font-semibold">Vehicle information</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div className="space-y-4">
                <input
                  className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded focus:outline-none"
                  type="text"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  required
                  placeholder="Color"
                />

                <input
                  className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded focus:outline-none"
                  type="text"
                  name="plate"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  required
                  placeholder="Plate"
                />
              </div>

              <div className="space-y-4">
                <input
                  className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded focus:outline-none"
                  type="text"
                  name="capacity"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  required
                  placeholder="Capacity"
                />

                <select
                  className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded focus:outline-none"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="car">Car</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button className="h-14 w-full text-center text-xl font-semibold bg-black text-white rounded hover:opacity-80 transition">
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <div className="mt-4 text-center">
          <p
            onClick={() => navigate("/captain-login")}
            className="text-lg cursor-pointer"
          >
            Already have an account?{" "}
            <span className="text-blue-600">Login instead</span>
          </p>
        </div>

        {/* Terms */}
        <p className="mt-10 text-[12px] text-center text-gray-500 px-4">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber & its affiliates to the number
          provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainRegister;
