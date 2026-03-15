import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { getSession } from "@/utils/auth";

export async function GET() {
  const session = await getSession();
  if (!session || session.persona !== "administrator") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await connectToDB();
  const users = await User.find({}).select("-password").sort({ createdAt: -1 });
  return NextResponse.json(users);
}

export async function POST(req) {
  const session = await getSession();
  if (!session || session.persona !== "administrator") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { name, email, password, persona } = await req.json();
    await connectToDB();

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { error: "A user with this email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      persona,
    });

    return NextResponse.json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        persona: user.persona,
      },
    });
  } catch (error) {
    console.error("Create user error:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
