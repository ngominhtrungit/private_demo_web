import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // Wait for 1 second before responding
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("This message appears after 1 second.");
    return NextResponse.json('123x');
}

export async function POST(request: Request) {
    const data = await request.json();

    // Wait for 1 second before responding
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("This message appears after 1 second.");
    return NextResponse.json(`Received data: ${JSON.stringify(data)}`);
}
