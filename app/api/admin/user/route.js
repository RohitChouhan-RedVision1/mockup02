import { ConnectDB } from "@/lib/db/ConnectDB";
import AdminModel from "@/lib/models/AdminModel";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        await ConnectDB(); // Ensure DB connection
        const admin = await AdminModel.find({}); // Fetch all blogs
        return NextResponse.json(admin, { status: 200 });
    } catch (error) {
        console.error('Error fetching admin:', error);
        return NextResponse.json({ error: 'Failed to fetch admin' }, { status: 500 });
    }
}