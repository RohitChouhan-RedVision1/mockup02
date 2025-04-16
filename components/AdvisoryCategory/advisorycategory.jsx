"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function AdvisorCategory() {
  const [categories, setCategories] = useState([]);
  const [categoriesFunds, setCategoriesFunds] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const arnId = "2612";
  const schemeCategory = "selectByAdvisor";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://redvisionweb.com/api/advisor-scheme-category?apikey=351b03c24a79d2f40796037e0d8c2c49",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ arnId }),
          }
        );

        const result = await response.json();
        if (result.status && result.data.length > 0) {
          setCategories(result.data);
          setSelectedCatId(result.data[0].catId);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = async (catId) => {
    const myId = catId ? catId : selectedCatId;
    setSelectedCatId(myId);
    setLoading(true);
    setCategoriesFunds([]);

    try {
      const response = await axios.post(
        "https://redvisionweb.com/api/advisor-scheme-category-funds?apikey=351b03c24a79d2f40796037e0d8c2c49",
        { arnId, category: myId, schemeCategory }
      );
      console.log(response.data.imageUrl);
      setImageUrl(response.data.imageUrl);
      setCategoriesFunds(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching schemes:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleCategoryClick();
  }, [selectedCatId]);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filled = Math.round(rating) || 0;
    const empty = totalStars - filled;
    return (
      <div className="flex items-center">
        {Array(filled)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        {Array(empty)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-gray-300">
              ★
            </span>
          ))}
      </div>
    );
  };

  return (
    <div className=" padding-top-section padding-bottom-section">
      <section className=" text-white   overflow-hidden">
        <div className="container  mx-auto px-4 lg:px-10 flex flex-col lg:flex-row gap-4 items-start">
          {/* Left - Categories & Funds */}
          <div className="w-full lg:w-1/2 bg-[#01285B] rounded-2xl  p-4 lg:p-10">
            <h2 className="text-white text-center text-3xl font-bold mb-2">
              Popular Funds
            </h2>
            <p className="text-blue-100 text-lg text-center mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing
            </p>

            {/* Category Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap items-center justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.catId}
                  onClick={() => handleCategoryClick(cat.catId)}
                  className={`px-4 py-2 rounded-md font-medium ${
                    selectedCatId === cat.catId
                      ? "bg-[#00DBFC] text-white"
                      : "bg-[#34537C] text-white hover:bg-[#00dbfc96]"
                  }`}
                >
                  {cat.categoryName}
                </button>
              ))}
            </div>

            {/* Funds List */}
            <div className="space-y-4">
              {loading ? (
                <p>Loading funds...</p>
              ) : categoriesFunds.length > 0 ? (
                categoriesFunds.slice(0, 3).map((fund, idx) => (
                  <div
                    key={idx}
                    className="bg-white text-black p-4 rounded-lg flex items-center justify-between shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="min-w-[50px] min-h-[50px]">
                        <Image
                          src={
                            fund.amcLogo
                              ? `${imageUrl}${fund.amcLogo}`.replace(
                                  "http://",
                                  "https://"
                                )
                              : "/default-logo.png"
                          }
                          alt="Fund Logo"
                          width={50}
                          height={50}
                          className="rounded-full border"
                        />
                      </div>
                      <div>
                        <div className="flex flex-col">
                          <p className="font-semibold truncate max-w-[260px]">
                            {fund.schemeName}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {fund.subcatogary || "Equity"}{" "}
                            {fund.schemeType ? ` - ${fund.schemeType}` : ""}
                          </p>
                        </div>
                        <div className="md:hidden">
                          <p className="text-green-600 font-bold">
                            {fund.oneYearPer || "0.00"}%
                          </p>
                          <div className="text-sm">
                            {renderStars(fund.starRating)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right hidden md:block">
                      <p className="text-green-600 font-bold">
                        {fund.oneYearPer || "0.00"}%
                      </p>
                      <div className="text-sm">
                        {renderStars(fund.starRating)}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No fund data available</p>
              )}
            </div>
          </div>

          {/* Right - Explore Mutual Funds */}
          <div className="w-full lg:w-1/2  text-white p-6 lg:py-36 rounded-xl">
            <h2 className="text-4xl font-bold mb-2">
              Explore <span className="text-[#00DBFC]">Mutual Funds</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <button className="bg-[#00DBFC] hover:bg-[#00dbfc96] text-white font-bold py-2 px-6 rounded-lg transition-all">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
