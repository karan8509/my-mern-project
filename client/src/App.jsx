import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./Component/auth-Layout/authLayout";
import { AuthLogin } from "./pages/authenticate-view/login";
import { AuthRegister } from "./pages/authenticate-view/register";
  export const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path=" login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>
    </Routes>
  );
};

