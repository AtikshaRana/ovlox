import { NextResponse } from "next/server";

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

        // Simulate sending an email
        console.log("Sending email to atiksharana2002@gmail.com...");
        console.log(`From: ${name} <${email}>`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);

        // In a real scenario, you would use Nodemailer, Resend, or another service here.
        // For now, we simulate a successful operation.
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Message sent successfully!" },
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
