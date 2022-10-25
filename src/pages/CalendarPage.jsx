import React from "react";
import { AddEventsGoogleCalendar } from "../components/AddEventsGoogleCalendar";
import { GetEventsGoogleCalendar } from "../components/GetEventsGoogleCalendar";

const CalendarPage = () => {
    return (
        <>
            <div>
                Календарь
            </div>
            <div>
                <GetEventsGoogleCalendar />
            </div>
            <div>
                <AddEventsGoogleCalendar />
            </div>
        </>
    )
}

export { CalendarPage }