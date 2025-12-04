import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserRegister from "./pages/user/UserRegister";
import UserLogin from "./pages/user/UserLogin";
import CaptainRegister from "./pages/captain/CaptainRegister";
import CaptainLogin from "./pages/captain/CaptainLogin";
import UserAuth from "./auth/UserAuth";
import UserHome from "./pages/user/UserHome";
import ConfirmCar from "./components/confirmRide/ConfirmCar";
import ConfirmMoto from "./components/confirmRide/ConfirmMoto";
import ConfirmAuto from "./components/confirmRide/ConfirmAuto";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          // Users routes
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route
            path="/user-home"
            element={
              <UserAuth>
                <UserHome />
              </UserAuth>
            }
          />
          <Route
            path="/confirm-car"
            element={
              <UserAuth>
                <ConfirmCar />
              </UserAuth>
            }
          />
          <Route
            path="/confirm-moto"
            element={
              <UserAuth>
                <ConfirmMoto />
              </UserAuth>
            }
          />
          <Route
            path="/confirm-auto"
            element={
              <UserAuth>
                <ConfirmAuto />
              </UserAuth>
            }
          />
          <Route
            path="/thankyou"
            element={
              <UserAuth>
                <ThankYou />
              </UserAuth>
            }
          />
          {/* Capatain routes */}
          <Route path="/captain-register" element={<CaptainRegister />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
