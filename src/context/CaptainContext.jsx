import { createContext, useContext, useState } from "react";

export const CaptainContext = createContext();

export const CaptainProvider = ({ children }) => {
  const [captainData, setCaptainData] = useState({});
  const value = {
    captainData,
    setCaptainData,
  };

  return (
    <CaptainContext.Provider value={value}>{children}</CaptainContext.Provider>
  );
};

export const useCaptain = () => useContext(CaptainContext);
