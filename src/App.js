import React from "react";
import "./components/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PurpleCapHolder from "./components/PurpleCapHolder";
import OrangeCapHolder from "./components/OrangeCapHolder";
import FinalsMatch from "./components/FinalsMatch";
import LongestSix from "./components/LongestSix";
import ErrorPage from "./components/ErrorPage";
import EmergingPlayer from "./components/EmergingPlayer";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/purplecap" element={<PurpleCapHolder />} />
          <Route path="/orangecap" element={<OrangeCapHolder />} />
          <Route path="/finals" element={<FinalsMatch />} />
          <Route path="/longestsix" element={<LongestSix />} />
          <Route path="/emergingplayer" element={<EmergingPlayer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
