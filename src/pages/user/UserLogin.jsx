import React, { useState } from "react";
import uber from "../../assets/images/Uber_logo_2018.png";
import { useNavigate } from "react-router-dom";
import eye from "../../assets/animations/Eye.json";
import Lottie from "lottie-react";
import axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/user/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    if (response.status === 200) {
      navigate("/user-home");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden p-4 lg:p-16 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <img
          onClick={() => navigate("/")}
          className="h-10 lg:h-16 cursor-pointer"
          src={uber}
          alt="logo"
        />
      </div>

      {/* Form Section */}
      <div className="mt-4 lg:mt-12 max-w-md mx-auto w-full">
        <form onSubmit={handleSubmit} className="w-full">
          <h3 className="text-xl font-semibold mt-4 mb-2">What's your email</h3>

          <input
            className="h-14 p-3 w-full rounded bg-[#eeeeee] focus:outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@email.com"
          />

          <h3 className="text-xl font-semibold mt-4 mb-2">Enter Password</h3>

          {/* Password Field Wrapper */}
          <div className="relative w-full">
            <input
              className="h-14 p-3 w-full rounded bg-[#eeeeee] focus:outline-none"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
            />

            {/* Eye Icon — Fully Responsive */}
            <div
              onClick={() => setShow(!show)}
              className="absolute top-1/2 right-4 -translate-y-1/2 h-8 w-8 cursor-pointer lg:h-10 lg:w-10"
            >
              <Lottie animationData={eye} loop />
            </div>
          </div>

          <button className="h-14 w-full text-center text-xl font-semibold bg-black text-white mt-6 rounded hover:scale-95 transition">
            Login
          </button>
        </form>
      </div>

      {/* New account */}
      <h1
        onClick={() => navigate("/user-register")}
        className="text-center text-lg font-normal cursor-pointer mt-6"
      >
        New here? <span className="text-blue-600">Create new account</span>
      </h1>

      {/* Captain Login CTA */}
      <div className="mt-8 max-w-md mx-auto w-full pb-8">
        <button
          onClick={() => navigate("/captain-login")}
          className="h-14 w-full text-center text-xl font-semibold bg-orange-500 text-white rounded hover:scale-95 transition"
        >
          Sign in as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
