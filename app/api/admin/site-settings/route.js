import { NextResponse } from 'next/server';
import { ConnectDB } from '@/lib/db/ConnectDB';
import SiteSettingsModel from '@/lib/models/SiteSetting';

export async function POST(req) {
    await ConnectDB();
    try {
        const {
            id, title, email, arn, address, mapurl, euin, mobile, mobile2, logo, description, twitter, facebook, instagram, linkedin, youtube
        } = await req.json();
        // console.log(title, email, arn, address, mapurl, euin, mobile, mobile2, logo, description, twitter, facebook, instagram, linkedin, youtube)
        const data = await SiteSettingsModel.find({});
        if (data.length !== 0) {
            await SiteSettingsModel.findByIdAndUpdate(
                { _id: id },
                {
                    title, email, arn, address, mapurl, euin, mobile, mobile2, logo, description, twitter, facebook, instagram, linkedin, youtube
                }
            );
        } else {
            await SiteSettingsModel.create({
                title, email, arn, address, mapurl, euin, mobile, mobile2, logo, description, twitter, facebook, instagram, linkedin, youtube
            });
        }
        return NextResponse.json({ message: 'Data uploaded successfully' }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await ConnectDB(); // Ensure DB connection
        const data = await SiteSettingsModel.find({}); // Fetch all blogs
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}