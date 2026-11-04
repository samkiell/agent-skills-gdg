import { NextResponse } from "next/server";

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  createdAt: string;
}

// In-memory array of reservations (resets on server restart)
const reservations: Reservation[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, date, time, guests, notes } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json(
        { ok: false, message: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim() === "") {
      return NextResponse.json(
        { ok: false, message: "Please provide your phone number." },
        { status: 400 }
      );
    }

    if (!date || typeof date !== "string" || date.trim() === "") {
      return NextResponse.json(
        { ok: false, message: "Please select a reservation date." },
        { status: 400 }
      );
    }

    if (!time || typeof time !== "string" || time.trim() === "") {
      return NextResponse.json(
        { ok: false, message: "Please select a reservation time." },
        { status: 400 }
      );
    }

    const guestCount = Number(guests);
    if (!guests || isNaN(guestCount) || guestCount < 1 || guestCount > 12) {
      return NextResponse.json(
        { ok: false, message: "Guests must be a number between 1 and 12." },
        { status: 400 }
      );
    }

    const newReservation: Reservation = {
      id: `res-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      phone: phone.trim(),
      date: date.trim(),
      time: time.trim(),
      guests: guestCount,
      notes: typeof notes === "string" ? notes.trim() : "",
      createdAt: new Date().toISOString(),
    };

    reservations.push(newReservation);

    return NextResponse.json({
      ok: true,
      message: "Table booked. The auntie has been notified.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request data. Please try again." },
      { status: 400 }
    );
  }
}

