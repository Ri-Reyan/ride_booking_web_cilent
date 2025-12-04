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
    <div className="h-screen w-full overflow-x-hidden p-4">
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
          <button className="h-14 w-full  text-center text-xl font-semibold bg-black text-white mt-6 rounded hover:scale-90">
            Sign Up
          </button>
        </form>
      </div>
      <div>
        <h1
          onClick={() => navigate("/user-login")}
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

export default UserRegister;
