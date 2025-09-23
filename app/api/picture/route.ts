import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { imageBytes, fileName } = body;
    const response = await fetch('http://172.16.105.167:1025/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'image': imageBytes, 'filename': fileName })
    });
    if (!response.ok) {
        return NextResponse.json({ data: null, success: false });
    }
    const data = await response.json();
    return NextResponse.json({ data: data, success: true });
}
