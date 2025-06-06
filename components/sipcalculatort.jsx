import React, { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const SipCalculator = ({ data }) => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(500);
    const [oneTimeInvestment, setOneTimeInvestment] = useState(500);
    const [investmentDuration, setInvestmentDuration] = useState(1);
    const [expectedReturn, setExpectedReturn] = useState(data);
    const [result, setResult] = useState(null);
    const [isMonthlySip, setIsMonthlySip] = useState(true);

    const calculateSip = () => {
        const monthlyRate = expectedReturn / 12 / 100; // Monthly rate as a decimal
        const months = investmentDuration * 12; // Convert years to months

        let futureValue, totalInvestment;

        if (isMonthlySip) {
            // Calculate for Monthly SIP
            futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
            totalInvestment = monthlyInvestment * months;
        } else {
            // Calculate for One-Time Investment
            futureValue = oneTimeInvestment * Math.pow(1 + monthlyRate, months);
            totalInvestment = oneTimeInvestment;
        }

        // Set results with proper precision
        setResult({
            futureValue: Number(futureValue.toFixed(2)),
            totalInvestment: Number(totalInvestment.toFixed(2))
        });
    };

    // Update the calculation when any of the investment values change
    useEffect(() => {
        calculateSip();
    }, [monthlyInvestment, oneTimeInvestment, investmentDuration, expectedReturn, isMonthlySip]);

    const setDuration = (years) => {
        const parsedYears = parseFloat(years);
        if (!isNaN(parsedYears)) {
            setInvestmentDuration(parsedYears);
        }
    };

    return (
        <div className="sip-calculator container mx-auto p-3 sticky top-0 z-10  ">
            <h1 className="text-2xl font-bold text-center mb-2">SIP Calculator</h1>

            {/* Investment Type Toggle */}
            <div className="flex justify-center space-x-4 mb-8">
                <Button
                    onClick={() => { setIsMonthlySip(true) }}
                    className={`text-xs rounded-full ${isMonthlySip ? 'bg-[var(--secondary)]' : 'bg-gray-500 text-white'}`}
                >
                    Monthly SIP
                </Button>
                <Button
                    onClick={() => { setIsMonthlySip(false) }}
                    className={`text-xs rounded-full ${!isMonthlySip ? 'bg-[var(--secondary)]' : 'bg-gray-500 text-white'}`}
                >
                    One-Time Investment
                </Button>
            </div>

            <div className="input-fields mt-5 mb-10">
                {isMonthlySip ? (
                    <div>
                        <div className='flex justify-between'>
                            <h1>
                                Monthly investment
                            </h1>
                            <div>
                                <span className='font-semibold text-[#00aeef]'>₹</span>
                                <input
                                    type="text" // Change type to number for better input handling
                                    value={monthlyInvestment}
                                    onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
                                    className='font-semibold text-[#00aeef] w-14 border-none'
                                />
                            </div>
                        </div>
                        <Input
                            type="range"
                            min="500"
                            max="50000"
                            step="500"
                            value={monthlyInvestment}
                            onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
                            className="w-full text-gray-400"
                        />
                    </div>
                ) : (
                    <div>
                        <div className='flex justify-between'>
                            <h1>
                                Total investment
                            </h1>
                            <div>
                                <span className='font-semibold text-[#00aeef]'>₹</span>
                                <input
                                    type="text" // Change type to number for better input handling
                                    value={oneTimeInvestment}
                                    onChange={(e) => setOneTimeInvestment(parseFloat(e.target.value))}
                                    className='font-semibold text-[#00aeef] w-14 border-none'
                                />
                            </div>
                        </div>
                        <Input
                            type="range"
                            min="500"
                            max="50000"
                            step="500"
                            value={oneTimeInvestment}
                            onChange={(e) => setOneTimeInvestment(parseFloat(e.target.value))}
                            className="w-full text-gray-400"
                        />
                    </div>
                )}

                <div className='items-center mt-5'>
                    <div className='flex justify-between'>
                        <h1>
                            Years
                        </h1>
                        <input
                            type="text" // Change type to number for better input handling
                            value={investmentDuration}
                            onChange={(e) => setDuration(e.target.value)} // Update duration
                            className="font-semibold text-[#00aeef] w-5 border-none"
                        />
                    </div>
                    <Input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        value={investmentDuration}
                        onChange={(e) => setDuration(e.target.value)} // Update duration
                        className="w-full text-gray-400"
                    />
                </div>
            </div>

            {result && (
                <div className="mt-5">
                    <div className='flex justify-between px-5 mb-3'>
                        <p>Invested Amount </p>
                        <p className='font-bold text-lg'>₹{result?.totalInvestment.toFixed(2)}</p>
                    </div>
                    <hr className='mb-3' />
                    <div className='flex justify-between px-5 mb-3'>
                        <p>Wealth Gained </p>
                        <p className='font-bold text-lg'>₹{Math.floor(result.futureValue - result.totalInvestment).toFixed(2)}</p>
                    </div>
                    <hr className='mb-3' />
                    <div className='flex justify-between px-5 mb-3'>
                        <p>Expected Amount </p>
                        <p className='font-bold text-lg'>₹{result.futureValue.toFixed(2)}</p>
                    </div>
                    <hr />
                </div>
            )}
        </div>
    );
};

export default SipCalculator;
