import { NextResponse } from "next/server";

/*
 * POST /api/contact
 *
 * Accepts a JSON contact / quote-request payload, validates required fields,
 * checks a honeypot, and returns a success response.
 *
 * Delivery integration (SendGrid, Resend, etc.) can be wired in later —
 * for now the payload is logged server-side and the response is { ok: true }.
 */

// ---------- Rate-limit placeholder ----------
// TODO: Integrate a proper rate-limiter (e.g., Upstash @upstash/ratelimit)
// before going to production. For now this is a no-op placeholder.
// const rateLimit = () => true;

// ---------- Helpers ----------

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function missing(fields: Record<string, string | undefined>) {
  const absent: string[] = [];
  for (const [key, val] of Object.entries(fields)) {
    if (!val || val.trim().length === 0) absent.push(key);
  }
  return absent;
}

// ---------- Handler ----------

export async function POST(request: Request) {
  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  // ── Honeypot ──
  if (body.companyWebsite && body.companyWebsite.trim().length > 0) {
    // Silently accept so bots don't retry
    return NextResponse.json({ ok: true });
  }

  // ── Required fields ──
  const required = missing({
    name: body.name,
    email: body.email,
    message: body.message,
  });

  if (required.length > 0) {
    return NextResponse.json(
      {
        error: `Missing required field(s): ${required.join(", ")}.`,
      },
      { status: 400 }
    );
  }

  // ── Email format ──
  if (!EMAIL_RE.test(body.email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // ── Log (placeholder for delivery integration) ──
  // eslint-disable-next-line no-console
  console.log("[contact-form]", JSON.stringify(body, null, 2));

  // TODO: Send email via SendGrid / Resend / SES here.

  return NextResponse.json({ ok: true });
}
