import { NextRequest, NextResponse } from "next/server";
import { Api } from "../../../api/Api";

export async function GET(req: NextRequest) {
  try {
    const result = await Api.Users.getAllUsers();
    return NextResponse.json(result.rows);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
