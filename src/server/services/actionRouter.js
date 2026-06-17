//to make the gemini actually do the work 
import { corsair } from "@/server/corsair.js";

export async function action(userId, actionData) {
    console.log('action data:')
    console.log(actionData, {depth:null})

    if (!actionData) {
        throw new Error("actionData is undefined");
    }

    const tenant = corsair.withTenant(userId);
    const params = actionData.parameters || actionData;


    switch (actionData.action) {
        case 'send_email':{
            const email =[
             `To: ${params.to}`,
             `Subject: ${params.subject}`, "",
             params.body,].join("\n");
             
             const raw = Buffer.from(email)
                .toString("base64")
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
                return await tenant.gmail.api.messages.send({raw});
    }

case 'create_calendar_event': {
    const summary = params.summary || params.title;
    const start = params.start || params.start_time;
    let end = params.end || params.end_time;

    if (!end && start) {
        const startDate = new Date(start);
        end = new Date(startDate.getTime() + 60*60*1000).toISOString();
    }

    try {
        return await tenant.googlecalendar.api.events.create({
            calendarId: params.calendarId || 'primary',
            event: {
                summary,
                location: params.location,
                start: { dateTime: start, timeZone: 'Asia/Kolkata' },
                end: { dateTime: end, timeZone: 'Asia/Kolkata' }
            }
        });
    } catch (err) {
        console.error('[create_calendar_event] full error body:', JSON.stringify(err.body, null, 2));
        throw err;
    }
}

        case 'search_email':
        return await tenant.gmail.api.messages.list({
           q: params.q,
           maxResults: params.maxResults || 20,
        });

        case 'get_calendar_events':
          return await tenant.googlecalendar.api.events.get({
             calendarId: params.calendarId || 'primary',
             eventId:params.eventId
          });

 case 'update_calendar_event':
    return await tenant.googlecalendar.api.events.update({
        calendarId: params.calendarId || 'primary',
        eventId: params.eventId,
        event: {
            summary: params.title,
            start: { dateTime: params.start, timeZone: 'Asia/Kolkata' },
            end: { dateTime: params.end, timeZone: 'Asia/Kolkata' }
        }
    });

        default:
           throw new Error(`unknown action : ${actionData.action}`);
    }

}

//create a calendar event called 'Standup' tomorrow at 5pm to 6pm, location: Delhi