import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    const data = await req.json();
    await connectToDB();
    await Contact.create(data);
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
