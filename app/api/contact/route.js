import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f6f9; padding: 30px;">
        <div style="max-width: 650px; margin: auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1D3557, #457B9D); padding: 30px; text-align: center;">
            <h2 style="color: #fff; margin: 0; font-size: 26px;">📩 You Got a New Message!</h2>
          </div>

          <!-- Body -->
          <div style="padding: 25px; color: #333; line-height: 1.6;">

            <!-- Name -->
            <div style="display: flex; align-items: center; background: #f9fbfd; padding: 15px; border-radius: 8px; border: 1px solid #e0e6ed; margin-bottom: 15px;">
              <span style="font-size: 30px; margin-right: 12px;">Hi, I'm </span>
              <p style="margin: 0; font-size: 30px; font-weight: bold; color: #1D3557">${name}</p>
            </div>

            <!-- Message -->
            <div style="background: #f9fbfd; padding: 15px; border-radius: 8px; border: 1px solid #e0e6ed; margin-bottom: 15px;">
              <span style="font-size: 40px;">💬</span>
              <div style="font-size: 20px; line-height: 1.5; margin-top: 10px; margin-left: 20px; text-align: justify;">
                ${message}
              </div>
            </div>

            <!-- Reply Button -->
            <a href="mailto:${email}" 
              style="display: inline-block; margin-top: 20px; padding: 12px 25px; background: #4CAF50; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 10px rgba(76,175,80,0.3);">
              🔁 Reply to ${name}
            </a>
          </div>

          <!-- Footer -->
          <div style="background: #f9f9f9; padding: 20px; text-align: center; font-size: 13px; color: #777;">
            <p style="margin: 0;">This message was sent from your <b>Portfolio Contact Form</b>.</p>
            <div style="margin-top: 10px;">
              <a href="https://linkedin.com/in/your-linkedin" style="margin: 0 8px; color: #0a66c2; text-decoration: none;">🔗 LinkedIn</a> |
              <a href="https://github.com/your-github" style="margin: 0 8px; color: #333; text-decoration: none;">💻 GitHub</a> |
              <a href="https://your-portfolio.com" style="margin: 0 8px; color: #4CAF50; text-decoration: none;">🌐 Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📨 New Message from ${name}`,
      html: htmlTemplate,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent with stylish template!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to send message",
    });
  }
}
