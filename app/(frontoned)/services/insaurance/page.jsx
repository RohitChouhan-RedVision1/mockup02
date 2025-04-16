import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Insurance (Life and Health)",
    description: "Explore life and health insurance plans to secure your future and protect your loved ones.",
};

const Insurance = () => {
    return (
        <div className="container mx-auto px-4 md:px-32 py-12">
            {/* Heading and Subheading */}
            <div className="text-center pt-[130px] pb-[50px]">
                <h1 className="text-3xl font-bold text-gray-800">Life & Health Insurance</h1>
                <div  className="em_bar mx-auto">
              <div className="em_bar_bg" />
            </div>
                <p className="text-xl text-gray-600 mt-2">Comprehensive Coverage for a Secure Future</p>
            </div>

            {/* Introduction with Image */}
            <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
                <div className="">
                    <p className="text-lg text-gray-700 text-justify mb-4">
                        Life and health insurance are essential for ensuring financial stability and security against unexpected events. The right plan protects your family, provides access to healthcare, and offers peace of mind for the future.
                    </p>
                </div>
                {/* <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
                    <Image src="/insurance-protection.jpg" alt="Insurance Protection" width={500} height={300} className="rounded-lg shadow-lg" />
                </div> */}
            </div>

            {/* Types of Insurance with Images */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Insurance</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <Image src="/Services/insurance-1.jpg" alt="Life Insurance" width={500} height={300} className="rounded-lg mb-4" />
                        <h3 className="font-semibold text-gray-800">Life Insurance</h3>
                        <p className="text-gray-700">Ensures financial security for your loved ones in case of an unfortunate event.</p>
                    </div>
                    <div className="bg-white shadow-md p-4 rounded-lg">
                        <Image src="/Services/insurance21.jpg" alt="Health Insurance" width={500} height={300} className="rounded-lg mb-4" />
                        <h3 className="font-semibold text-gray-800">Health Insurance</h3>
                        <p className="text-gray-700">Covers medical expenses, ensuring access to quality healthcare without financial stress.</p>
                    </div>
                </div>
            </div>

            {/* Features of Insurance Plans */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits</h2>
                <ul className="list-disc pl-5 space-y-4">
                    <li className="text-gray-700">Customizable Plans: Choose a plan that fits your needs and budget.</li>
                    <li className="text-gray-700">Affordable Premiums: Get the best coverage at competitive rates.</li>
                    <li className="text-gray-700">Hassle-Free Claims: Quick and efficient claim processing.</li>
                    <li className="text-gray-700">Cashless Hospitalization: Access medical care without upfront payments.</li>
                    <li className="text-gray-700">Expert Guidance: Our advisors help you select the best insurance solutions.</li>
                </ul>
            </div>

            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
                <p className="text-lg text-gray-700 mb-4">
                    Secure your future with comprehensive life and health insurance. Protect yourself and your loved ones from financial uncertainties today.
                </p>
                <Link href="/contact-us" >
                    <Button className="bg-[var(--secondary)] cursor-pointer text-white rounded-2xl pl-8 pr-8 text-xl">Get Started with Insurance</Button>
                </Link>
            </div>
        </div>
    );
};

export default Insurance;
