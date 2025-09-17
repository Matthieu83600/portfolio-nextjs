import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmail from '@/utils/email_template';

const resend = new Resend(process.env.RESEND_API_KEY);
const contactResend = process.env.CONTACT_RESEND as string;
const contactEmail = process.env.CONTACT_EMAIL as string;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: `Contact <${contactResend}>`,
      to: contactEmail,
      subject: `Nouveau message de ${name}`,
      react: ContactEmail({ name, email, message }),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l’envoi du message' },
      { status: 500 }
    );
  }
}
