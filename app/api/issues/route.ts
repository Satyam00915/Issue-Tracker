import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
import { issueSchema } from "@/app/validationSchemas";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = issueSchema.safeParse(body);
  console.log(validation.success);
  if (!validation.success) {
    return NextResponse.json(validation.error.format, { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}

export async function GET() {
  const issues = await prisma.issue.findMany();
  return NextResponse.json(issues);
}
