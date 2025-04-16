import { ConnectDB } from "@/lib/db/ConnectDB";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        await ConnectDB(); const response = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/all-amc`);
        const data = response.data;
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
