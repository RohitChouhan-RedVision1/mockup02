import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Mutual Fund Services",
  description:
    "Invest in mutual funds to diversify your portfolio and achieve long-term financial growth with professional management.",
};

const MutualFunds = () => {
  return (
    <div className="container mx-auto px-4 md:px-32 py-12">
      {/* Heading and Subheading */}

      <div className="text-center items-center pt-[80px] pb-[50px]">
        <h1 className="text-3xl font-bold text-white">Mutual Funds</h1>
        <div className="em_bar mx-auto">
          <div className="em_bar_bg" />
        </div>
        <p className="text-xl text-gray-100 mt-2">
          Smart Investments for Your Financial Goals
        </p>

        {/* Image Below Heading */}
        {/* <div className="mt-6 flex justify-center">
                    <Image src="/mutual-funds-banner.jpg" alt="Mutual Funds" width={700} height={350} className="rounded-lg shadow-lg" />
                </div> */}
      </div>

      {/* Introduction with Image */}
      <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2">
          <p className="text-lg text-gray-300 items-center text-justify">
            Mutual funds are an excellent way to grow your wealth while reducing
            individual investment risk. By pooling resources from multiple
            investors, mutual funds provide you with exposure to a variety of
            asset classes like equities, bonds, and more. With professional
            management, they offer a balanced approach to building wealth for
            both beginners and seasoned investors.
          </p>
          <p className="text-lg text-gray-300 mt-2 text-justify items-center">
            A mutual fund is a pool of funds collected from investors and
            invested in a diverse set of financial instruments like stocks,
            bonds, and other securities. These funds are managed by experienced
            fund managers who allocate investments across various asset classes
            to ensure diversified and risk-adjusted returns.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8 flex justify-center mt-6 md:mt-0">
          <Image
            src="/Services/mutual-fund-1.jpg"
            alt="Investment Growth"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Product Description with Image */}
      {/* <div className="mb-8 flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 flex justify-center mb-6 md:mb-0">
                    <Image src="/fund-management.jpg" alt="Fund Management" width={500} height={300} className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                    <p className="text-lg text-gray-700">
                        A mutual fund is a pool of funds collected from investors and invested in a diverse set of financial instruments like stocks, bonds, and other securities. These funds are managed by experienced fund managers who allocate investments across various asset classes to ensure diversified and risk-adjusted returns. Whether you are looking for long-term growth, steady income, or tax-saving options, there’s a mutual fund for every financial goal.
                    </p>
                </div>
            </div> */}

      {/* Types of Mutual Funds */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Types of Mutual Funds
        </h2>
        <ul className="list-disc pl-5 space-y-4 text-gray-300">
          <li>
            <h3 className="font-semibold text-gray-200">Equity Mutual Funds</h3>
            <p className="text-gray-300">
              Invest primarily in stocks. They carry higher risk but offer the
              potential for higher returns over the long term.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-300">Debt Mutual Funds</h3>
            <p className="text-gray-200">
              Invest in bonds and other fixed-income securities. These are less
              risky than equity funds, making them ideal for conservative
              investors.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-300">Hybrid Mutual Funds</h3>
            <p className="text-gray-200">
              A mix of equity and debt investments. They balance risk and
              return, making them suitable for moderate-risk investors.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-300">Index Funds</h3>
            <p className="text-gray-200">
              These funds track a specific market index like the Nifty or
              Sensex, providing a passive investment strategy with lower costs.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-300">Liquid Funds</h3>
            <p className="text-gray-200">
              Invest in short-term money market instruments like treasury bills
              and commercial papers. Suitable for investors looking for
              liquidity and low risk.
            </p>
          </li>
        </ul>
      </div>

      {/* Features of Mutual Funds */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Features of Mutual Funds
        </h2>
        <ul className="list-disc pl-5 space-y-4 text-gray-200">
          <li>
            <p className="text-gray-300">
              Diversification: Spread your investments across various asset
              classes to reduce risk.
            </p>
          </li>
          <li>
            <p className="text-gray-300">
              Professional Management: Your investment is managed by expert fund
              managers who make decisions based on market conditions.
            </p>
          </li>
          <li>
            <p className="text-gray-300">
              Liquidity: Mutual funds can be easily bought or sold, providing
              you with flexibility to access your money when needed.
            </p>
          </li>
          <li>
            <p className="text-gray-300">
              Affordable: You don’t need a large amount to start investing in
              mutual funds, making them accessible to a wide range of investors.
            </p>
          </li>
          <li>
            <p className="text-gray-300">
              Tax Benefits: Certain mutual funds like ELSS offer tax-saving
              opportunities under the relevant sections of tax laws.
            </p>
          </li>
          <li>
            <p className="text-gray-300">
              Transparency: Regular updates on fund performance and net asset
              value (NAV) ensure you stay informed about your investment.
            </p>
          </li>
        </ul>
      </div>

      {/* Conclusion and CTA */}
      <div className="text-center mt-8">
        <p className="text-lg text-gray-300 mb-4">
          Whether you&apos;re just starting out or are looking to diversify your
          portfolio, mutual funds are a great way to achieve your financial
          goals. With professional management, diversified investment options,
          and low entry costs, mutual funds provide a smart path to long-term
          growth. Begin your investment journey today!
        </p>
        <Link href="/contact-us" className="text-white">
          <Button className="bg-[var(--secondary)] text-white rounded-2xl px-8 text-xl cursor-pointer">
            Start Investing in Mutual Funds Today!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MutualFunds;
