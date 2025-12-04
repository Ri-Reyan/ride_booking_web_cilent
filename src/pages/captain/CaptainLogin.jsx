import React, { useState } from "react";
import uber from "../../assets/images/Uber_logo_2018.png";
import { useNavigate } from "react-router-dom";
import eye from "../../assets/animations/Eye.json";
import Lottie from "lottie-react";
import axios from "axios";

const CaptainLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/captain/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        navigate("/captain-home");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen w-full p-4 overflow-x-hidden flex flex-col items-center">
      {/* Top Logo */}
      <div className="w-full max-w-[500px]">
        <img
          onClick={() => navigate("/")}
          className="h-12 cursor-pointer"
          src={uber}
          alt="Uber logo"
        />
      </div>

      {/* Login Form */}
      <div className="w-full max-w-[500px] mt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">What's your email</h3>
            <input
              className="h-14 p-3 w-full rounded bg-[#eeeeee] focus:outline-none mt-2"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@email.com"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold">Enter Password</h3>

            <div className="relative mt-2">
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

          <button className="h-14 w-full text-center text-xl font-semibold bg-black text-white rounded hover:opacity-80 transition">
            Login
          </button>
        </form>
      </div>

      {/* Redirect */}
      <div className="w-full max-w-[500px] mt-4 text-center">
        <p
          onClick={() => navigate("/captain-register")}
          className="text-lg cursor-pointer"
        >
          New here? <span className="text-blue-600">Create new account</span>
        </p>
      </div>

      {/* User Login CTA */}
      <div className="w-full max-w-[500px] mt-20">
        <button
          onClick={() => navigate("/user-login")}
          className="h-14 w-full text-center text-xl font-semibold bg-green-500 text-white rounded hover:opacity-80 transition"
        >
          Sign in as User
        </button>
      </div>
    </div>
  );
};

export default CaptainLogin;
