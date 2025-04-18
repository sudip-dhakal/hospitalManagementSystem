import { useState } from "react";
import Login from "./Authentication/Login";
import Landing_Page from "./Authentication/Landing_Page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Authentication/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
