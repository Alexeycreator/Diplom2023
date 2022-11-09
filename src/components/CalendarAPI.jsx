import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";

const CalendarAPI = () => {
  const responceGoogle = (response) => {
    console.log(response);
     
  };

  const responceError = (error) => {
    console.log(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(summary, description, location, startDateTime, endDateTime);
  };

  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [signedIn, setSignedIn] = useState(false)

  return (
    <>
      <div>Google Calendar API</div>
      !signedIn ? () : ()
      <div>
        <GoogleLogin
          clientId="680874329558-gc4kdkm3v9m8ns56dbglcgd68vno784p.apps.googleusercontent.com"
          buttonText="Войти в Google"
          onSuccess={responceGoogle}
          onFailure={responceError}
          cookiePolicy={"single_host_origin"}
          responseType="code"
          accessType="offline"
          scope="openid email profile https://www.googleapis.com/auth/calendar"
        />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="summary">Событие</label>
          <br />
          <input
            type="text"
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <br />
          <label htmlFor="description">Описание</label>
          <br />
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label htmlFor="location">Местоположение</label>
          <br />
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <label htmlFor="startDateTime">Начало события</label>
          <br />
          <input
            type="datetime-local"
            id="startDateTime"
            value={startDateTime}
            onChange={(e) => setStartDateTime(e.target.value)}
          />
          <br />
          <label htmlFor="endDateTime">Конец события</label>
          <br />
          <input
            type="datetime-local"
            id="endDateTime"
            value={endDateTime}
            onChange={(e) => setEndDateTime(e.target.value)}
          />
          <br />
          <button type="submit">Создать событие</button>
        </form>
      </div>
    </>
  );
};

export { CalendarAPI };
