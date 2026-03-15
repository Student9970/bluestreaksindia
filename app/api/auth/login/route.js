import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { createToken } from "@/utils/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    await connectToDB();

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = await createToken({
      userId: user._id.toString(),
      email: user.email,
      name: user.name,
      persona: user.persona,
    });

    const response = NextResponse.json({
      success: true,
      user: { name: user.name, email: user.email, persona: user.persona },
    });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 86400,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
