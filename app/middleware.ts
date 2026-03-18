import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("test");
  return NextResponse.next();
}
