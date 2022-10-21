import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <Link to="/googleCalendar">
                <button>Получить данные с Google Calendar</button>
            </Link>
        </div>
    )
}

export { Login }