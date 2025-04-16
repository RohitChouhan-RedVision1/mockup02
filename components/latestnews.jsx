"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import axios from "axios";
import NewsCard from "./newscard";

export default function LatestNews() {
    const [ipodata, setIpodata] = useState([]);
    const [marketdata, setMarketdata] = useState([]);
    const [populardata, setPopulardata] = useState([]);
    const [activeCategory, setActiveCategory] = useState("ipo"); // Track selected category
    const [data, setData] = useState([]); // Data to be displayed

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching all data in a single API call
                const ipoRes = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/upcoming-news/ipo-news?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
                const marketRes = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/upcoming-news/market-news?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
                const popularRes = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/upcoming-news/popular-news?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);

                if (ipoRes.status === 200 && marketRes.status === 200 && popularRes.status === 200) {
                    setIpodata(ipoRes.data);
                    setMarketdata(marketRes.data);
                    setPopulardata(popularRes.data);

                    // Set the initial data to display based on the active category
                    if (activeCategory === "ipo") setData(ipoRes.data);
                    else if (activeCategory === "market") setData(marketRes.data);
                    else setData(popularRes.data);
                }
            } catch (error) {
                console.error("Failed to fetch data", error);
            }
        };
        fetchData();
    }, []); // Empty dependency array to run this only once

    useEffect(() => {
        // Update displayed data when active category changes
        if (activeCategory === "ipo") setData(ipodata);
        else if (activeCategory === "market") setData(marketdata);
        else setData(populardata);
    }, [activeCategory, ipodata, marketdata, populardata]); // Re-run when activeCategory or data changes

    return (
        <div className="container mx-auto px-4 lg:px-10">
            <section className="py-10">
            <div>
                <div className="gap-4 flex flex-col md:flex-row mb-4 mt-10">
                    <div className="flex  justify-center w-full md:w-1/3 pl-3">
                        <iframe
                            className="rounded-e-lg w-full max-w-full"
                            src="https://www.youtube.com/embed/vU1l1TB7GzI?si=PIA9x5wttBf57ecv"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className=" w-full md:w-2/3">
                    <div className="mb-6">
                  <div className="border-l-4 border-[var(--secondary)] pl-4">
                    <p className="text-[18px] font-medium text-[var(--secondary)] uppercase  inline-block leading-none mb-2">
                      news
                    </p>
                  </div>
                  <h2 className="text-[32px] sm:text-[36px] md:text-[42px] leading-[40px] sm:leading-[46px] md:leading-[52px] text-[#042132] uppercase font-extrabold mb-0">
                    Latest Updates
                  </h2>
                </div>

                        {/* Buttons with active class and hover effect */}
                        <div className="grid md:grid-cols-3 grid-cols-1 mb-6">
                            <div
                                className={`px-5 py-3 rounded-s-lg cursor-pointer ${activeCategory === "ipo" ? "bg-[var(--secondary)]" : "bg-[var(--primary)]"} text-white text-center`}
                                onClick={() => setActiveCategory("ipo")}
                            >
                                IPO
                            </div>
                            <div
                                className={`px-5 py-3 cursor-pointer ${activeCategory === "market" ? "bg-[var(--secondary)]" : "bg-[var(--primary)]"} text-white text-center`}
                                onClick={() => setActiveCategory("market")}
                            >
                                Market
                            </div>
                            <div
                                className={`px-5 py-3 rounded-e-lg cursor-pointer ${activeCategory === "upcoming" ? "bg-[var(--secondary)]" : "bg-[var(--primary)]"} text-white text-center`}
                                onClick={() => setActiveCategory("upcoming")}
                            >
                                Upcoming
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <Carousel
                                className="mx-auto"
                                plugins={[
                                    Autoplay({
                                        delay: 1500,
                                    }),
                                ]}
                            >
                                <CarouselContent className="-ml-1">
                                    {data?.map((item, index) => (
                                        <CarouselItem key={index} className="pl-1 sm:basis-1/2 lg:basis-1/3">
                                            <NewsCard item={item} key={index} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
