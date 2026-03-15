import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import User from "@/models/User";
import { getSession } from "@/utils/auth";

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
        { status: 400 }
      );
    }

    await User.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete user error:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
