import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Tax Planning Simplified",
    description: "Maximize savings, minimize liabilities, and navigate the complexities of tax planning with expert strategies tailored to your financial goals.",
};

const TaxPlanning = () => {
    return (
        <div className="container mx-auto px-4 md:px-32 py-12  pt-[100px] pb-[50px]">
            {/* Heading and Subheading */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Tax Planning Simplified</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Maximizing Savings, Minimizing Liabilities</p>
            </div>

 <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2">
                <p className="text-lg text-gray-700 text-justify md:mt-10">
                    Tax planning strategies aim to minimize tax burdens while maximizing savings within established financial regulations. Whether you're an individual or a business owner, tax planning is essential to enhance wealth accumulation and reduce unnecessary liabilities. Our expert team will guide you through various tax strategies to optimize your tax position and help you achieve your financial goals.
                </p>
                </div>
                <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
                    <Image src="/Services/tax-planning-1.jpg" alt="Insurance Protection" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Benefits of Tax Planning */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits of Tax Planning</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Enhanced Savings: Leveraging available deductions, credits, and exemptions for increased savings.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Wealth Growth: Structuring your finances in a way that fosters wealth accumulation while minimizing taxes.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Risk Mitigation: Diversifying investments and adopting strategies to reduce your exposure to tax liabilities.</p>
                    </li>
                </ul>
            </div>

            {/* Compliance in Tax Planning */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compliance in Tax Planning</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <p className="text-gray-700">Knowledge of Laws: Ensuring you stay informed about tax regulations and their implications on your finances.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Precision in Reporting: Guaranteeing accuracy and compliance with tax reporting and documentation.</p>
                    </li>
                    <li>
                        <p className="text-gray-700">Ethical Strategies: Implementing tax planning strategies that adhere to ethical practices and legal standards.</p>
                    </li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Effective tax planning is an essential part of securing your financial future. Our team is dedicated to helping you maximize your savings, reduce liabilities, and ensure your tax strategies are fully compliant. Get started today to unlock the full potential of tax planning for your wealth growth.
                </p>
                <Link href="/contact-us" className='text-white'>
                    <Button className="bg-[var(--secondary)] text-white rounded-2xl pl-8 pr-8 text-xl cursor-pointer">Get Started Today!</Button>
                </Link>
            </div>
        </div>
    );
};

export default TaxPlanning;
