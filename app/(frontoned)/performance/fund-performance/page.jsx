"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "./loading";

export default function MarketUpdate() {
    const [categories, setCategories] = useState([]);
    const [schemes, setSchemes] = useState([]);
    const [filteredSchemes, setFilteredSchemes] = useState([]); // For filtering schemes
    const [performanceData, setPerformanceData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Equity');
    const [selectedScheme, setSelectedScheme] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // State for search input
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const fetchSchemes = async (category) => {
        setLoading(true);
        try {
            const response = await axios.post(
                "https://wealthelite.in/eliteN/research/top_Performer_CategorySchemes",
                { categorySchemes: category ? category : "Equity" }
            );
            if (response.status === 200) {
                setSchemes(response.data.resultCategory);
                setFilteredSchemes(response.data.resultCategory); // Initially show all schemes
                if (response.data.resultCategory && response.data.resultCategory.length > 0) {
                    const firstScheme = response.data.resultCategory[0];
                    setSelectedScheme(firstScheme);
                    fetchPerformanceData(firstScheme);
                }
            }
        } catch (error) {
            console.error("Error fetching schemes:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchPerformanceData = async (schemeType) => {
        setLoading(true);
        try {
            const response = await axios.post(
                "https://wealthelite.in/eliteN/research/top_performer_data",
                { ftype: schemeType, returnFundType: "", duration: "" }
            );
            if (response.status === 200) {
                setPerformanceData(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching performance data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.post(
                    "https://dev.wealthelite.in/eliteN/research/top_Performer_Selection"
                );
                if (response.status === 200) {
                    setCategories(response.data.data.Category);
                    fetchSchemes(response.data.data.Category[0]);
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        fetchSchemes(category);
    };

    const handleSchemeSelect = (scheme) => {
        setSelectedScheme(scheme);
        fetchPerformanceData(scheme);
    };

    const handlePerformanceClick = (performance) => {
        const slug = performance.funddes.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/--+/g, '-').replace(/^-+|-+$/g, '');
        const queryParameters = new URLSearchParams({
            id: selectedScheme,
            pcode: performance.pcode,
        }).toString();

        // Navigate to the performance page with slug and query parameters
        router.push(`/performance/fund-performance/${slug}?${queryParameters}`);
    };

    // Search filter logic for schemes
    const handleSearchChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchTerm(searchValue);

        const filtered = schemes?.filter(scheme =>
            scheme.toLowerCase().includes(searchValue)
        );
        setFilteredSchemes(filtered);
    };
    return (
        <div className="lg:px-40 px-10 py-20">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 mb-5">
                {categories?.map((item, index) => (
                    <div
                        key={index}
                        className={`px-3 py-3 bg-white border ${selectedCategory === item ? 'border-[#00aeef]' : 'border-gray-300'} rounded shadow cursor-pointer flex flex-col items-center`}
                        onClick={() => handleCategorySelect(item)}
                    >
                        <Image src={`/images/${item}.svg`} width={70} height={70} className="mb-5 text-teal-500" alt="" />
                        <h1 className="font-bold text-gray-700 text-2xl text-center uppercase">{item}</h1>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-5">
                <div className="col-span-1">
                    {/* Search bar */}
                    <input
                        type="text"
                        placeholder="Search Scheme"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-3 py-2 border rounded mb-1"
                    />

                    {/* Display filtered schemes */}
                    {filteredSchemes?.map((scheme, index) => (
                        <div
                            key={index}
                            className={`px-3 py-3 ${selectedScheme === scheme ? 'bg-[#00aeef]/80' : 'bg-white'} border border-gray-200 rounded shadow cursor-pointer my-2`}
                            onClick={() => handleSchemeSelect(scheme)}
                        >
                            <h1 className={`font-bold ${selectedScheme === scheme ? 'text-white' : 'text-gray-800'} text-sm text-center`}>{scheme}</h1>
                        </div>
                    ))}
                </div>

                <div className="col-span-3">
                    {loading ? (
                        <Loading items={performanceData.length} />
                    ) : (
                        <table className="min-w-full bg-white border border-gray-300 rounded">
                            <thead>
                                <tr className="bg-gray-100 text-gray-800">
                                    <th className="py-2 px-4 border-b">Fund Name</th>
                                    <th className="py-2 px-4 border-b">1 Week</th>
                                    <th className="py-2 px-4 border-b">1 Month</th>
                                    <th className="py-2 px-4 border-b">3 Month</th>
                                    <th className="py-2 px-4 border-b">6 Month</th>
                                    <th className="py-2 px-4 border-b">9 Month</th>
                                    <th className="py-2 px-4 border-b">1 Year</th>
                                    <th className="py-2 px-4 border-b">3 Year</th>
                                    <th className="py-2 px-4 border-b">5 Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {performanceData?.map((performance, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handlePerformanceClick(performance)}
                                    >
                                        <td className="py-2 px-4 border-b">
                                            {performance.funddes}
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">
                                            {performance.oneweek}
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">
                                            {performance.onemonth || "N/A"}
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">
                                            {performance.three_month || "N/A"}
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">
                                            {performance.six_month || "N/A"}
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">
                                            {performance.nine_month || "N/A"}
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">
                                            {performance.one_year || "N/A"}
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">
                                            {performance.three_year || "N/A"}
                                        </td>
                                        <td className="py-2 px-4 border-b text-center">
                                            {performance.five_year || "N/A"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
