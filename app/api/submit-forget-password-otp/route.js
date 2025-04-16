import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.json();
        const res = await axios.post("https://wealthelite.in/Login/login/submit-forget-password-otp", formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",  // Set the content type to multipart/form-data
                }
            }
        );
        return NextResponse.json(res.data, { status: 201 });
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 });
    }

}