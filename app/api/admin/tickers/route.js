import { ConnectDB } from "@/lib/db/ConnectDB";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        await ConnectDB();
        // Fetch the data from the external API
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/tickers`);
        // Extract only the data field from the Axios response
        const data = response.data;
        // Return the fetched data in the response
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
