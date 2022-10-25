import React from "react";

const GetEventsGoogleCalendar = () => {

    var gapi = window.gapi
    var CLIENT_ID = "792545294844-ileqc9i3mfs3h0uut7tou347j93onggp.apps.googleusercontent.com"
    var API_KEY = "AIzaSyAlws1JeF2q_rnPDlmjgqSpUdOA5ZUbi7U"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.readonly"

    const handleClick = () => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            })

            gapi.client.load('calendar', 'v3', () => console.log('Данные успешно загружены!'))

            gapi.auth2.getAuthInstance().signIn()
                .then(() => {
                    gapi.client.calendar.events.list({
                        'calendarId': 'primary',
                        'timeMin': (new Date()).toISOString(),
                        'showDeleted': false,
                        'singleEvents': true,
                        'maxResulys': 10,
                        'orderBy': 'startTime'
                    }).then(response => {
                        const events = response.result.items
                        console.log('events: ', events)
                    })
                })
        })
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>Загрузить события</button>
            </div>
            <div>
                
            </div>
        </>
    )
}

export { GetEventsGoogleCalendar }