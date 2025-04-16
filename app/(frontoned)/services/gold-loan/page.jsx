import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Gold Loan",
    description: "Unlock the value of your gold with flexible and accessible gold loan options.",
};

const GoldLoan = () => {
    return (
        <div className="container mx-auto px-4 md:px-32 py-12">
            {/* Heading and Subheading */}
            <div className="text-center pt-[80px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Gold Loan</h1>
                <div className="em_bar mx-auto">
                    <div className="em_bar_bg" />
                </div>
                <p className="text-xl text-gray-600 mt-2">Quick and Secure Financing Against Your Gold Assets</p>
            </div>

            {/* Introduction with Image */}
            <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2">
                    <p className="text-lg text-gray-700 text-justify md:mt-10">
                        A Gold Loan allows you to leverage the value of your gold to secure immediate financing. With minimal paperwork and quick approval, a gold loan offers a convenient way to access funds without liquidating your assets.
                    </p>
                </div>
                <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
                    <Image src="/Services/Gold Loan 1.jpg" alt="Gold Loan" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Opt for a Gold Loan?</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li><p className="text-gray-700">Quick Access to Funds: Get fast approval and disbursement with minimal paperwork.</p></li>
                    <li><p className="text-gray-700">No Credit Score Required: The loan is secured against your gold, so no credit history is needed.</p></li>
                    <li><p className="text-gray-700">Flexible Loan Amounts: Borrow as much as the value of your gold, with attractive loan-to-value ratios.</p></li>
                    <li><p className="text-gray-700">Low Interest Rates: Enjoy competitive interest rates, making repayment more affordable.</p></li>
                    <li><p className="text-gray-700">Easy Repayment Options: Flexible repayment plans and loan tenure to suit your needs.</p></li>
                </ul>
            </div>

            {/* Loan Process with Image */}
            <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 flex justify-center mb-6 md:mb-0">
                    <Image src="/Services/Gold Loan 2.avif" alt="Loan Process" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Apply for a Gold Loan?</h2>
                    <p className="text-lg text-gray-700">Applying for a Gold Loan is simple and straightforward:</p>
                    <ul className="list-disc pl-5 space-y-4 mt-4">
                        <li><p className="text-gray-700">Submit your gold as collateral at an authorized lending institution.</p></li>
                        <li><p className="text-gray-700">Provide minimal documentation (proof of identity and gold purity).</p></li>
                        <li><p className="text-gray-700">Get your loan amount approved based on the value of your gold.</p></li>
                        <li><p className="text-gray-700">Receive the loan amount quickly, with flexible repayment terms.</p></li>
                    </ul>
                </div>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Unlock the value of your gold today! Get the funds you need quickly and securely with a Gold Loan.
                </p>
                <Link href="/contact-us" className='text-white'>
                    <Button className="bg-[var(--secondary)] text-white rounded-2xl pl-8 pr-8 text-xl">Apply for a Gold Loan Now!</Button>
                </Link>
            </div>
        </div>
    );
};

export default GoldLoan;
