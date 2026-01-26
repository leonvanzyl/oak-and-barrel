import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = "https://n8n.srv1026488.hstgr.cloud/webhook/make-reservation";

interface ReservationRequest {
  name: string;
  partySize: number;
  dateTime: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ReservationRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.partySize || !body.dateTime) {
      return NextResponse.json(
        { error: "Missing required fields: name, partySize, and dateTime are required" },
        { status: 400 }
      );
    }

    // Call the n8n webhook
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.name,
        partySize: body.partySize,
        dateTime: body.dateTime,
      }),
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error("Webhook error:", errorText);
      return NextResponse.json(
        { error: "Failed to create reservation" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reservation API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
