import React from "react";
import { Route, Routes } from "react-router-dom";
import { CalendarPage } from "./pages/CalendarPage";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Navigation } from "./navigation/Navigation";
import { InfoPage } from "./pages/InfoPage";
import { AuthGoogle } from "./components/AuthGoogle";
import { GoogleCalendar } from "./components/GoogleCalendar";

const App = () => {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendarPage" element={<CalendarPage />} />
        <Route path="/infoPage" element={<InfoPage />} />
        <Route path="/welcomeGoogle" element={<AuthGoogle />} />
        <Route path="/googleCalendar" element={GoogleCalendar} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}


export default App;
