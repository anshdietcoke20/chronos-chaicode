import { corsair } from "@/server/corsair";
import { auth } from "@/server/auth";
import { headers } from "next/headers";

export async function POST(request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const tenant = corsair.withTenant(session.user.id);
    console.log(Object.keys(tenant));
    console.log("googlecalendar keys:", Object.keys(tenant.googlecalendar));

console.log(
  "api keys:",
  Object.keys(tenant.googlecalendar.api)
);

console.log(
  "events keys:",
  Object.keys(tenant.googlecalendar.api.events)
);

    const { pageToken } = await request.json();

    const result = await tenant.googlecalendar.api.events.getMany({
      calendarId: "primary",
      maxResults: 20,
      pageToken,
      singleEvents: true,
      orderBy: "startTime",
    });

    console.log("Events:", result );
    
    return Response.json({
      events: result.items ?? [],
      nextPageToken: result.nextPageToken ?? null,
    });

  } catch (err) {
    console.error("Calendar API error:", err);

    return Response.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}