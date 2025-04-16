import { NextRequest, NextResponse } from 'next/server';
import { ConnectDB } from "@/lib/db/ConnectDB";
import axios from 'axios';
import TickersModel from '@/lib/models/Tickers';
import AllowedDomainModel from '@/lib/models/AllowedDomains';
import ApiKeyUsageModel from '@/lib/models/ApiKeyUsageModel'; // New model for API key usage

const MONTHLY_LIMIT = 500000; // Define the monthly limit
const SPECIAL_API_KEY = process.env.NEXT_PUBLIC_API_LIMITE_KEY; // Define the special API key that allows unlimited hits

export async function GET(request) {
    await ConnectDB();
    const { searchParams } = new URL(request.url);
    const apikey = searchParams.get('apikey');

    if (!apikey) {
        return NextResponse.json(
            { error: 'API key is required' },
            { status: 400 } // Bad Request
        );
    }

    // Check if the API key is the special one that allows unlimited hits
    if (apikey === SPECIAL_API_KEY) {
        console.log('Special API key detected, no hit limit applied.');
    } else {
        const isAllowedDomain = await AllowedDomainModel.findOne({ apikey: apikey });
        // console.log('isAllowedDomain:', isAllowedDomain);
        if (!isAllowedDomain) {
            return NextResponse.json(
                { error: 'Invalid API Key' },
                { status: 403 } // Forbidden
            );
        }
        const currentDate = new Date();
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 23, 59, 59, 999);

        let apiKeyUsage = await ApiKeyUsageModel.findOne({ apikey });

        if (!apiKeyUsage) {
            // If no usage record exists, create one
            apiKeyUsage = new ApiKeyUsageModel({
                apikey,
                monthlyHitCount: 1,
                lastMonthlyReset: startOfMonth,
            });
            await apiKeyUsage.save();
        } else {
            // Check if the monthly hit count needs to be reset
            if (apiKeyUsage.lastMonthlyReset < startOfMonth) {
                apiKeyUsage.monthlyHitCount = 1; // Reset the monthly count
                apiKeyUsage.lastMonthlyReset = startOfMonth;
            } else {
                // Increment monthly hit count
                apiKeyUsage.monthlyHitCount += 1;
            }

            // Check if the monthly hit count exceeds the limit
            if (apiKeyUsage.monthlyHitCount > MONTHLY_LIMIT) {
                return NextResponse.json(
                    { error: `Monthly API hit limit of ${MONTHLY_LIMIT} exceeded` },
                    { status: 429 } // Too Many Requests
                );
            }

            await apiKeyUsage.save();
        }
    }

    // Get the Referer header from the request
    const origin = request.headers.get('origin');

    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', origin || '*');
    headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (request.method === 'OPTIONS') {
        return new NextResponse(null, { headers });
    }

    try {
        const response = await axios.get('https://wealthelite.in/eliteN/app/live-rates');
        const apiData = response.data.data;

        const existingTickers = await TickersModel.find({});

        if (existingTickers.length === 0) {
            console.log('No existing tickers found. Inserting data...');
            await TickersModel.insertMany(apiData);
            return NextResponse.json({ message: 'Data inserted successfully' }, { status: 201, headers });
        }

        let updatedCount = 0;
        const bulkOps = apiData.map((rate) => {
            const existingTicker = existingTickers.find((ticker) => ticker.symbol === rate.symbol);

            if (existingTicker) {
                const isDataChanged = JSON.stringify(existingTicker) !== JSON.stringify(rate);

                if (isDataChanged) {
                    updatedCount++;
                    return {
                        updateOne: {
                            filter: { symbol: rate.symbol },
                            update: { $set: rate },
                        },
                    };
                }
            } else {
                return {
                    insertOne: {
                        document: rate,
                    },
                };
            }
        }).filter(Boolean);

        if (bulkOps.length > 0) {
            await TickersModel.bulkWrite(bulkOps);

            if (updatedCount > 0) {
                return NextResponse.json({ status: 1, data: existingTickers }, { status: 200, headers });
            } else {
                return NextResponse.json({ status: 1, data: existingTickers }, { status: 200, headers });
            }
        } else {
            return NextResponse.json({ status: 1, data: existingTickers }, { status: 200, headers });
        }
    } catch (error) {
        console.error('Error fetching or updating data:', error);
        return NextResponse.json({ error: 'Failed to fetch or update data' }, { status: 500 });
    }
}
