"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card"; 
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"; // Import Recharts components
// import { Bar } from "react-chartjs-2";  // Import Bar chart component from react-chartjs-2
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Link from "next/link";
import styles from "./calculator.module.css";
import { motion } from "framer-motion";
import axios from "axios";
// import { Chart } from "react-google-charts";  // Import Google Chart

// Register ChartJS components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

const fadeInVariants1 = {
  hidden: { opacity: 0, y: -100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};
export default function Calculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(2500);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [investmentDuration, setInvestmentDuration] = useState(10);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);

  const calculateSip = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/calculators/sip-calculator?monthlyInvestment=${monthlyInvestment}&investmentDuration=${investmentDuration}&expectedReturn=${expectedReturn}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
        if (res.status === 200) {
            const data = res.data
            const futureValue = data.futureValue;
            const totalInvestment = data.totalInvestment;
            const yearlyData = data.yearlyData;
            setResult({
                futureValue: Number(futureValue.toFixed(2)),
                totalInvestment: Number(totalInvestment.toFixed(2))
            });
            setChartData(yearlyData);
        }
    }
    catch (error) {
        console.log(error)
    }

};

// console.log(result,chartData[0],"dnajkdnh")
// Update the calculation when any of the investment values change
useEffect(() => {
    calculateSip();
}, [monthlyInvestment, investmentDuration, expectedReturn]);

  const chartDataset = chartData.map((item) => ({
    year: item.year,
    profit: item.growth-item.investedAmount,
    investment: item.investedAmount,
  }));
  return (
    <div className="md:py-12 py-4 px-4 bg-[#F5FFFC]">
      <div className="  container mx-auto px-4 lg:px-10   items-center lg:text-center ">
      <div className="mb-10 pl-4 md:pl-0">
              <div className="">
                <p className="text-[18px] font-medium text-[var(--secondary)] uppercase  inline-block leading-none border-l-4 border-[var(--secondary)] pl-4 ">CALCULATOR</p>
              </div>
              <h2 className="text-[32px] sm:text-[36px] md:text-[42px] leading-[40px] sm:leading-[46px] md:leading-[52px] text-[#042132] uppercase font-extrabold mb-0">Power Of Sip </h2>
            </div>
      <div className="">
          <div className="flex flex-col md:flex-row pt-5 md:relative ">
            <Card initial="hidden"
          custom={0} className="p-6 sm:p-4 bg-[#175288] md:w-[65%] rounded-xl  border-none">
              {/* < */}
              <div className="sm:space-y-8 lg:pl-32 md:pr-40">
                {/* Invested Amount Section */}
                <div>
                  <div className="flex sm:flex-row flex-col justify-between">
                    <label className="block  text-white text-lg font-semibold ">
                      Invested Amount (₹)
                    </label>
                    <div className="relative w-32">
                      <input
                        type="number"
                        value={monthlyInvestment}
                        onChange={(e) =>
                          setMonthlyInvestment(Number(e.target.value))
                        }
                        className="w-full pl-12 bg-transparent border  border-white border-solid rounded-[75px] text-white font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">
                        ₹
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[monthlyInvestment]}
                    onValueChange={(value) => setMonthlyInvestment(value[0])}
                    max={100000}
                    step={1000}
                    className="mt-2 text-white"
                  />
                </div>
              </div>

              <div className="space-y-8 lg:pl-32 md:pr-40 mt-2 ">
                <div>
                  <div className="flex sm:flex-row flex-col justify-between">
                    <label className="block text-white font-semibold">
                      Expected Return (%)
                    </label>
                    <div className="relative w-32">
                      <input
                        type="number"
                        value={expectedReturn}
                        onChange={(e) =>
                          setExpectedReturn(Number(e.target.value))
                        }
                        className="w-full pl-12 bg-transparent border  border-white border-solid rounded-[75px] text-white font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">
                        %
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[expectedReturn]}
                    onValueChange={(value) => setExpectedReturn(value[0])}
                    max={30}
                    step={0.5}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="space-y-8 lg:pl-32 md:pr-40 mt-2">
                {/* Invested Amount Section */}
                <div>
                  <div className=" flex sm:flex-row flex-col justify-between">
                    <label className="block text-white font-semibold">
                      Time Period (Y)
                    </label>
                    <div className="relative w-32">
                      <input
                        type="number"
                        value={investmentDuration}
                        onChange={(e) => setInvestmentDuration(Number(e.target.value))}
                        className="w-full pl-12 bg-transparent border  border-white border-solid rounded-[75px] text-white font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">
                        Y
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[investmentDuration]}
                    onValueChange={(value) => setInvestmentDuration(value[0])}
                    max={40}
                    step={1}
                    className="mt-2 "
                  />
                </div>
              </div>

              <div className="space-y-8 lg:pl-32 md:pr-40">
                {/* Invested Amount Section */}
                <div className="mt-2 pl-5  h-[200px] lg:h-[220px]  bg-white">
                  {/* <Bar data={chartDataset} options={chartOptions} /> */}
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartDataset}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="profit" fill="var(--primary)" stackId="a" />
                      <Bar dataKey="investment" fill="var(--secondary)" stackId="a" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-8 lg:pl-32 md:pr-40 mt-4 ">
                {/* Invested Amount Section */}
                <div className="border-2 border-solid border-white rounded-[10px] p-4 flex flex-col lg:flex-row justify-between">
                  <div
                    className={`${styles.beborder} flex flex-col justify-between`}
                  >
                    <label className="block mb-1 text-white font-bold">
                      Total Invested
                    </label>
                    <label className="block mb-1 text-white font-bold">
                      ₹{result?.totalInvestment.toLocaleString("en-IN")}
                    </label>
                  </div>
                  <div
                    className={`${styles.beborder} flex flex-col justify-between`}
                  >
                    <label className="block mb-1 text-white font-bold">
                      Estimated Return
                    </label>
                    <label className="block mb-1 text-white font-bold">
                       ₹{(result?.futureValue-result?.totalInvestment).toLocaleString("en-IN")}
                    </label>
                  </div>

                  <div className="flex flex-col justify-between">
  <label className="block mb-1 text-white font-bold">
    Total Amount
  </label>
  <label className="block mb-1 text-white font-bold">
    ₹{result?.futureValue?.toLocaleString("en-IN")}
  </label>
</div>
                </div>
              </div>
            </Card>

            {/* Info Card */}
            <motion.Card initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
          custom={1} className="p-8 bg-white md:absolute md:w-[45%]  md:right-2 md:bottom-24">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Invest in your favorite Ones
              </h3>
              {/* <p className="text-gray-600 mb-6">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
  </p> */}
              <p className="text-gray-600 mb-6 text-justify">
                We offer a variety of tools to help you manage and track your
                investments more efficiently. Explore our suite of tools to stay
                on top of the market and make informed decisions. From price
                trackers to advanced market analysis, our tools are designed to
                help you achieve your financial goals with ease.
              </p>
              <div className="flex flex-col gap-4 lg:flex-row md:gap-4">
               
                  <Button className="font-bold bg-[var(--secondary)] font-[--font-body] px-4 py-2 rounded-lg text-white">
                    <Link href={"/"}>View Market Watch</Link>
                  </Button>
              </div>
            </motion.Card>
          </div>
        </div>
      </div>
    </div>
  );
}
