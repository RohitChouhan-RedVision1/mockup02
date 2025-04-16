import { ConnectDB } from "@/lib/db/ConnectDB";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        await ConnectDB(); // Ensure DB connection
        const admin = await axios.get("https://superadmin-roan.vercel.app/api/open-apis/amc-logo"); // Fetch all blogs
        return NextResponse.json(admin.data, { status: 200 });
    } catch (error) {
        console.error('Error fetching admin:', error);
        return NextResponse.json({ error: 'Failed to fetch admin' }, { status: 500 });
    }
}