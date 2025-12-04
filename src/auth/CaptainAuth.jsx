import React, { useEffect } from "react";
import { useCaptain } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainAuth = ({ children }) => {
  const { setCaptainData } = useCaptain();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/captain/captaintokenvalid`,
          {},
          { withCredentials: true }
        );
        setCaptainData(res.data);
        navigate("/captain-home");
      } catch (err) {
        navigate("/captain-login");
      }
    };
    verifyToken();
  }, [setCaptainData, navigate]);
  return <div>{children}</div>;
};

export default CaptainAuth;
