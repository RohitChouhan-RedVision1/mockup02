import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Financial Advisory",
    description: "Expert financial advisory services to help you achieve your financial goals with strategic planning and smart investments.",
};

const FinancialAdvisory = () => {
    return (
        <div className="container mx-auto px-4 md:px-32 py-12">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Financial Advisory Services</h1>
                <div className="em_bar mx-auto">
                    <div className="em_bar_bg" />
                </div>
                <p className="text-xl text-gray-600 mt-2">Strategic Financial Planning for a Secure Future</p>
            </div>

            {/* Introduction with Image */}
            <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2">
                    <p className="text-lg text-gray-700 text-justify md:mt-10">
                        Achieving financial stability and growth requires expert guidance and strategic planning. Our professional financial advisory services help you make informed decisions, manage wealth, and secure a prosperous future with customized strategies tailored to your needs.
                    </p>
                </div>
                <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
                    <Image src="/Services/corporate-fds-2.jpg" alt="Financial Planning" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Benefits of Financial Advisory */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Financial Advisory?</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Wealth Management: Optimize your investments and savings for long-term growth.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Retirement Planning: Secure your future with strategic retirement savings and pension plans.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Risk Assessment: Identify and mitigate financial risks for better financial health.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Tax Optimization: Reduce liabilities and maximize returns with expert tax planning.</p>
                    </li>
                </ul>
            </div>

            {/* Financial Planning Process */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Financial Advisory Process</h2>
                <ol className="list-decimal pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Understand Your Goals: Assess your financial needs, aspirations, and risk tolerance.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Create a Customized Plan: Develop strategies based on your unique financial situation.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Implement Strategies: Execute investment and savings plans for optimal growth.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Monitor and Adjust: Continuously track progress and make necessary adjustments.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Secure Long-Term Success: Build wealth and ensure financial security for the future.</p>
                    </li>
                </ol>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Take control of your financial future with expert advice and personalized strategies. Let us help you achieve financial success today.
                </p>
                <Link href="/contact-us">
                    <Button className="bg-[var(--secondary)] cursor-pointer text-white rounded-2xl pl-8 pr-8 text-xl">Start Your Financial Planning Today!</Button>
                </Link>
            </div>
        </div>
    );
};

export default FinancialAdvisory;
