import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { question } = body;
    const response = await fetch('https://n8n.seateklab.vn/webhook/d48f9e07-3c05-4be8-86ca-5cee4c27b78f/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'question': question, "sessionId": Date.now().toString() })
    });
    if (!response.ok) {
        return NextResponse.json({ data: null, success: false });
    }
    const data = await response.json();
    return NextResponse.json({ data: data, success: true });
}
