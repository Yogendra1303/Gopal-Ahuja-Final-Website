import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the standard environment variable or a fallback
const resend = new Resend(process.env.RESEND_API_KEY || process.env.ResendAPIKey);

export async function POST(req: Request) {
  try {
    const { name, email, intent } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Gopal Ahuja Advisory <hello@gopalahuja.com>',
      to: ['hello@gopalahuja.com'],
      subject: `New Lead: ${intent}`,
      html: `
        <h2>New Lead Capture</h2>
        <p>A user has just submitted their details to access exclusive content or join the newsletter.</p>
        <br/>
        <p><strong>Intent / Action:</strong> ${intent}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to capture lead' },
      { status: 500 }
    );
  }
}
