import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage, ProfilePage, LoadingPage } from "./pages";
import { supabase } from "./functions/supabase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);




root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoadingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
