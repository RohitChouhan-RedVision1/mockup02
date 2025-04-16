"use client";
import React, { useEffect, useState } from "react";
import styles from './bsechartSection.module.css'
// import SectionHeading from "../sectionHeading";
import axios from "axios";
import { BseReturnChart } from "@/components/charts/bseReturnChart";

export default function BseChartSection() {
    const [graphData, setGraphData] = useState([]);

    const fetchGraphData = async () => {
        try {
            const today = new Date();
            const formattedToday = today.toISOString().split("T")[0]; // "YYYY-MM-DD"
    
            const response = await axios.post("https://wealthelite.in/eliteN/bse-schemes/get-sensex-data", {
                startDate: "1997-01-01",
                endDate: formattedToday,
            });
    
            if (response.status === 200) {
                const data = response.data.data;
                setGraphData(data);
            }
        } catch (error) {
            console.error("Error fetching graph data:", error);
        }
    };
    

    useEffect(() => {
        fetchGraphData();
    }, []);

    return (
        <section className="bg-[var(--rv-ternary)] padding-top-section padding-bottom-section">
            <div className="container mx-auto ">
            <div className="  ">
            <div className={styles.consultationContainer}>
                {/* Heading and Description */}
                {/* <div className={styles.imageContainer}>
                    <SectionHeading title="What Early Investing Can Do" variant="light" align="center" />
                    <p className="mt-3 max-w-4xl text-lg mx-auto text-center">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                    </p>
                </div> */}

<div className="col-span-1 md:col-span-2">
                        <BseReturnChart data={graphData} />
                    </div>
            </div>
        </div>
            </div>
        </section>
    );
}