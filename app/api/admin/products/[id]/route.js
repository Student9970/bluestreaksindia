import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import Product from "@/models/Product";
import { getSession } from "@/utils/auth";
import { getPersonaAccess } from "@/utils/personas";

export async function PUT(req, { params }) {
  const session = await getSession();
  if (!session || !getPersonaAccess(session.persona).includes("products")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;
    const data = await req.json();
    await connectToDB();
    const product = await Product.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error("Update product error:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const session = await getSession();
  if (!session || !getPersonaAccess(session.persona).includes("products")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;
    await connectToDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete product error:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
