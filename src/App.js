import React from "react";
import { Route, Routes } from "react-router-dom";
import { CalendarPage } from "./pages/CalendarPage";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Navigation } from "./navigation/Navigation";
import { InfoPage } from "./pages/InfoPage";
import { GoogleCalendar } from "./components/GoogleCalendar";
import { AuthGoogle } from "./components/AuthGoogle";
import { CalendarAPI } from "./components/CalendarAPI";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendarPage" element={<CalendarPage />} />
        <Route path="/infoPage" element={<InfoPage />} />
        <Route path="/googleCalendar" element={<GoogleCalendar />} />
        <Route path="/welcomeGoogle" element={<AuthGoogle />} />
        <Route path="/calendarAPI" element={<CalendarAPI />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
