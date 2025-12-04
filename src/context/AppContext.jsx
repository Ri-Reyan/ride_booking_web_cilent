import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [carselect, setCarSelect] = useState(false);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [confirm, setConfirm] = useState("");

  const value = {
    userData,
    setUserData,
    carselect,
    setCarSelect,
    pickup,
    setPickup,
    drop,
    setDrop,
    confirm,
    setConfirm,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
