import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { ContactMessage } from "@/models/ContactMessage";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Name, email and message are required" }, { status: 400 });
    }

    await connectDB();

    const messageData = {
      name,
      email,
      subject: subject || "(no subject)",
      message,
      createdAt: new Date(),
    };

    // Save to DB
    await ContactMessage.create(messageData);

    // Send notification email (Optional)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      try {
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
          subject: `[Portfolio] ${subject || "New message"} — from ${name}`,
          html: `
            <h2>New contact from your portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || "(none)"}</p>
            <hr/>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email send failed:", emailError);
      }
    }

    return NextResponse.json({ message: "Message received. I'll get back to you soon!" }, { status: 201 });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
