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
    <div className="h-screen w-screen overflow-x-hidden p-4 lg:p-16">
      <div>
        <img
          onClick={() => navigate("/")}
          className="h-10 lg:h-16"
          src={uber}
          alt=""
        />
      </div>

      <div className="mt-4 lg:mt-12">
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold mt-4 mb-2">What's your email</h3>
          <input
            className="h-14 p-3 w-full rounded bg-[#eeeeee] focus:outline-none"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@email.com"
          />
          <h3 className="text-xl font-semibold mt-4 mb-2">Enter Password</h3>
          <div>
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
          <button className="h-14 w-full text-center text-xl font-semibold bg-black text-white mt-6 rounded hover:scale-90">
            Login
          </button>
        </form>
      </div>

      <div>
        <h1
          onClick={() => navigate("/user-register")}
          className="text-center text-lg font-normal"
        >
          New here? <span className="text-blue-600">Create new account</span>
        </h1>
      </div>

      <div className="mt-[30vh]">
        <button
          onClick={() => navigate("/captain-login")}
          className="h-14 w-full text-center text-xl font-semibold bg-orange-500 text-white mt-6 rounded hover:scale-90"
        >
          Sign in as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
