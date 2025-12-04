import React, { useEffect } from "react";
import { useApp } from "../context/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserAuth = ({ children }) => {
  const { setUserData } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/user/usertokenvalid`,
          {},
          { withCredentials: true }
        );
        setUserData(res.data);
        navigate("/user-home");
      } catch (err) {
        navigate("/user-login");
      }
    };
    verifyUser();
  }, []);
  return <div>{children}</div>;
};

export default UserAuth;
