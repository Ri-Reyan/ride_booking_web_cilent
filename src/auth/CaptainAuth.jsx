import React, { useEffect } from "react";
import { useCaptain } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainAuth = ({ children }) => {
  const { captainData, setCaptainData } = useCaptain();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      // If captainData already exists, skip verification
      if (captainData?.id) return;

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/captain/captaintokenvalid`,
          {},
          { withCredentials: true } // send cookie automatically
        );

        if (!res.data?.success) {
          return navigate("/captain-login");
        }

        setCaptainData(res.data.captain);

        if (window.location.pathname !== "/captain-home") {
          navigate("/captain-home");
        }
      } catch (err) {
        console.error("Captain token verification failed:", err);
        navigate("/captain-login");
      }
    };

    verifyToken();
  }, [captainData, setCaptainData, navigate]);

  return <>{children}</>;
};

export default CaptainAuth;
