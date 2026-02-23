import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Send actual email using Resend
        const { data, error } = await resend.emails.send({
            from: "Ovlox Contact <onboarding@resend.dev>", // Resend default for unverified domains
            to: ["atiksharana2002@gmail.com"], // Your test email
            subject: `Contact Form: ${subject}`,
            replyTo: email,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(
            { message: "Message sent successfully!", id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in contact API:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
