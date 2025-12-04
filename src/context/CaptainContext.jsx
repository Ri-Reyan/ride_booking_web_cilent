import { createContext, useContext, useState } from "react";

export const CaptainContext = createContext();

export const CaptainProvider = ({ children }) => {
  const [captainData, setUserData] = useState({});
  const value = {
    captainData,
    setUserData,
  };

  return (
    <CaptainContext.Provider value={value}>{children}</CaptainContext.Provider>
  );
};

export const useCaptain = () => useContext(CaptainContext);
