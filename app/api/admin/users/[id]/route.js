import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { getSession } from "@/utils/auth";

export async function PUT(req, { params }) {
  const session = await getSession();
  if (!session || session.persona !== "administrator") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;
    const { name, email, password, persona } = await req.json();

    await connectToDB();

    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (persona) updateData.persona = persona;
    if (password) updateData.password = await bcrypt.hash(password, 12);

    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Update user error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update user" },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  const session = await getSession();
  if (!session || session.persona !== "administrator") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;
    await connectToDB();

    if (session.userId === id) {
      return NextResponse.json(
        { error: "You cannot delete your own account" },
        { status: 400 },
      );
    }

    await User.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete user error:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 },
    );
  }
}
