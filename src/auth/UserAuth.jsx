import React, { useEffect } from "react";
import { useApp } from "../context/AppContext";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const UserAuth = ({ children }) => {
  const { userData, setUserData } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyUser = async () => {
      if (userData?.id) return; // already have user data

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/user/usertokenvalid`,
          {},
          { withCredentials: true }
        );

        if (!res.data?.success) {
          return navigate("/user-login");
        }

        setUserData(res.data.user);

        // Only redirect to /user-home if on login or root page
        if (location.pathname === "/" || location.pathname === "/user-login") {
          navigate("/user-home");
        }
      } catch (err) {
        console.error(err);
        navigate("/user-login");
      }
    };

    verifyUser();
  }, [userData, setUserData, navigate, location]);

  return <>{children}</>;
};

export default UserAuth;
