import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uber from "../../assets/images/Uber_logo_2018.png";
import eye from "../../assets/animations/Eye.json";
import Lottie from "lottie-react";
import axios from "axios";

const UserRegister = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/user/register`,
      {
        fullname: {
          firstname,
          lastname,
        },
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      navigate("/user-home");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden p-4 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <img
          onClick={() => navigate("/")}
          className="h-10 cursor-pointer"
          src={uber}
          alt="logo"
        />
      </div>

      {/* Form */}
      <div className="mt-4 max-w-md mx-auto w-full">
        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <h3 className="text-xl font-semibold mt-4">What's your name</h3>
          <div className="w-full flex gap-2 mt-4">
            <input
              className="h-14 w-1/2 bg-[#eeeeee] text-lg p-3 rounded focus:outline-none"
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First name"
            />
            <input
              className="h-14 w-1/2 bg-[#eeeeee] text-lg p-3 rounded focus:outline-none"
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last name"
            />
          </div>

          {/* Email Field */}
          <h3 className="text-xl font-semibold mt-4">What's your email</h3>
          <input
            className="h-14 w-full bg-[#eeeeee] text-lg p-3 rounded mt-4 focus:outline-none"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
          />

          {/* Password Field */}
          <h3 className="text-xl font-semibold mt-4">Enter password</h3>
          <div className="relative mt-4 w-full">
            <input
              className="h-14 p-3 w-full rounded bg-[#eeeeee] focus:outline-none"
              type={show ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
            />

            {/* Responsive Eye Icon */}
            <div
              onClick={() => setShow(!show)}
              className="absolute top-1/2 right-4 -translate-y-1/2 h-8 w-8 cursor-pointer lg:h-10 lg:w-10"
            >
              <Lottie animationData={eye} loop />
            </div>
          </div>

          {/* Submit Button */}
          <button className="h-14 w-full text-center text-xl font-semibold bg-black text-white mt-6 rounded hover:scale-95 transition">
            Sign Up
          </button>
        </form>
      </div>

      {/* Login Redirect */}
      <div className="mt-6">
        <h1
          onClick={() => navigate("/user-login")}
          className="text-center text-lg font-normal cursor-pointer"
        >
          Already have an account?{" "}
          <span className="text-blue-600">Login instead</span>
        </h1>
      </div>

      {/* Consent Text */}
      <h1 className="mt-8 text-[12px] font-normal text-center max-w-md mx-auto text-gray-600">
        By proceeding, you consent to get calls, WhatsApp or SMS messages,
        including by automated means, from Uber & its affiliates to the number
        provided.
      </h1>
    </div>
  );
};

export default UserRegister;
