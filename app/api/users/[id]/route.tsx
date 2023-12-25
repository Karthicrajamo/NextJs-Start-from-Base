
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(request: NextRequest, {params}:{ params: { id: number } }) {
    if (params.id > 10) 
        return NextResponse.json({error:'User not found'})
	return NextResponse.json({id:params.id});
}

export async function PUT(request: NextRequest, {params}: {params:{id:number}}){
    const body = await request.json()
    const validation = schema.safeParse(body)
    if(!validation.success)
        return NextResponse.json({error: validation.error.errors}, {status: 400})

    if (params.id > 10)
    return NextResponse.json({error: 'User Not Found'}, {status: 404})

    return NextResponse.json({id: 1, name:body.name}, {status: 200})
}