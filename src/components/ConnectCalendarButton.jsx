'use client'

export default function ConnectCalendarButton(){
    return(
    <button onClick={() => window.location.href = '/api/connect?plugin=googlecalendar'}>
       Connect your Google Calendar
    </button>
    );
}
