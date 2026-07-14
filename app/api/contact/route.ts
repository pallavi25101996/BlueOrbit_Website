import { NextResponse } from "next/server";

/**
 * Contact form API route — STUB.
 *
 * =====================================================================
 * TODO(client): PLUG IN A REAL EMAIL/CRM BACKEND HERE.
 * =====================================================================
 * Right now this route only validates the payload and logs it to the
 * server console, then returns success. Before go-live, wire this to one
 * of the following (pick per your stack):
 *
 *   - A transactional email service (e.g. Resend, SendGrid, Postmark)
 *     to notify sales@ / info@myasiaconsultingindia.com
 *   - A form backend (e.g. Formspree, Basin) via a simple fetch()
 *   - Your CRM's lead-capture API (BlueOrbit CRM) once its endpoint exists
 *
 * The client form (components/ContactForm.tsx) already falls back to a
 * pre-filled mailto: if this route returns a non-2xx response, so leads
 * are never silently dropped while the backend is pending.
 * =====================================================================
 */

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  message?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Server-side validation (never trust the client alone).
  if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 422 }
    );
  }
  if (!emailRe.test(data.email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  // TODO(client): replace this log with a real send/persist call.
  console.log("[contact] New enquiry:", {
    name: data.name,
    email: data.email,
    company: data.company,
    interest: data.interest,
    message: data.message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
