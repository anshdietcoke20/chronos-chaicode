
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

    const { pageToken } = await request.json();

    const result = await tenant.gmail.api.messages.list({
      maxResults: 20,
      pageToken,
    });

    const messages = result.messages ?? [];

    const emailDisplay = await Promise.all(
      messages.map((msg) =>
        tenant.gmail.api.messages.get({
          id: msg.id,
          format: "full",
        })
      )
    );

    return Response.json({
      emails: emailDisplay,
      nextPageToken: result.nextPageToken ?? null,
    });
  } catch (err) {
    console.error("Inbox API error:", err);

    return Response.json(
      { error: "Failed to fetch emails" },
      { status: 500 }
    );
  }
}