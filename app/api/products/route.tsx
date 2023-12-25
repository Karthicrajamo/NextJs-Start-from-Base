import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import { error } from "console";

export function GET(request: NextRequest) {
	return NextResponse.json([
		{
			id: 1,
			name: "Milk",
			price: 2.5,
		},
		{
			id: 2,
			name: "Curd",
			price: 3.5,
		},
	]);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(
			{ error: validation.error.errors },
			{ status: 400 }
		);
	return NextResponse.json({id:2, ...body}, {status:201});
}
