
import { checkGemini } from "@/lib/gemini";

const geminiAI = await checkGemini();

const model = "gemini-2.5-flash";

export async function runAgent(userPrompt) {
    const now = new Date();
    const nowISO = now.toISOString();
    const timeZone = 'Asia/Kolkata'
    const response = await geminiAI.models.generateContent({
    model, 
    contents: `
    You are a helpful assistant for Gmail and Google Calendar.
    Current date/time (ISO 8601, UTC): ${nowISO}
    User's timezone: ${timeZone}
    Understand the user's request and return ONLY valid JSON, no markdown, no explanation.

Always return an ARRAY of action objects, even if there is only one action.

Each action object MUST have exactly this shape:
{
  "action": "send_email" | "create_calendar_event" | "search_email" | "get_calendar_events" | "update_calendar_event",
  "parameters": { ... }
}

Field requirements per action:
- send_email: parameters = { "to": string, "subject": string, "body": string }
- create_calendar_event: parameters = { "summary": string, "start": ISO8601 datetime with timezone offset, "end": ISO8601 datetime with timezone offset, "location": string (optional) }
- search_email: parameters = { "q": string, "maxResults": number (optional) }
- get_calendar_events: parameters = { "calendarId": string (optional, default "primary"), "eventId": string }
- update_calendar_event: parameters = { "calendarId": string (optional), "eventId": string, "title": string, "start": ISO8601 datetime, "end": ISO8601 datetime }

Resolve all relative dates/times (e.g. "tomorrow at 5pm") into absolute ISO 8601 datetimes using the current date/time and timezone given above. Never output natural language dates.

If end time is not specified for a calendar event, default it to 1 hour after start.

    User request: ${userPrompt}
    `,
});

const cleanOutput = response.text.replace(/```json/g, '').replace(/```/g, '').trim();

 let parsed;
    try {
        parsed = JSON.parse(cleanOutput);
    } catch (err) {
        throw new Error(`Failed to parse agent JSON output: ${err.message}. Raw output: ${cleanOutput}`);
    }

    return Array.isArray(parsed) ? parsed : [parsed];
};
