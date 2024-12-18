import {
  addUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "@/app/repo/utilisateurs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error reading users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const newUser = await request.json();
    const user = await addUser(newUser);
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
export async function PUT(request: Request) {
  try {
    const updatedUser = await request.json();
    const user = await updateUser(updatedUser);
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await deleteUser(id);
    return NextResponse.json({ message: "User deleted" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
