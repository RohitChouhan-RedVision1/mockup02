"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaMapLocation, FaPinterest, FaTwitter } from "react-icons/fa6";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

export function Footer({}) {

  const services = [
    { href: "/mutual-funds", text: "Mutual Funds" },
    { href: "/financial-advisory", text: "Financial Advisory" },
    { href: "/tax-planning", text: "Tax Planning" },
    { href: "/insurance", text: "Insurance" },
  
  ];

  const tools = [
    { href: "/tools/calculators", text: "Calculators" },
    { href: "/tools/downloadforms", text: "Download Form" },
    { href: "/tools/financialhealth", text: "Financial health" },
    { href: "/tools/paypremiumonline", text: "Pay Premium online" },
    { href: "/tools/riskprofile", text: "Risk Profile" },
    { href: "/tools/usefullinks", text: "Usefull Links" },
  
  ];
  return (
<div className={`" bg-[var(--rv-bg-primary)] padding-top-section  pb-10 `}>

      <footer >
      <section className=" container mx-auto px-3 md:px-5 lg:px-10 ">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Us */}
            <div>
            <div className="">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={100}
              />
            </Link>
          </div>
              <p className="mt-5 text-[var(--rv-white)] text-md hover:text-[var(--rv-secondary)] font-urbanist text-justify">
              At Redvission, we understand that your financial journey is more than just numbers; it's a story of dreams, aspirations, and the legacy you want to create. We are here to be your trusted financial companion, guiding you through every step.
              </p>
            
              
            </div>

            {/* Services */}
            <div>
            <h4 className="relative text-lg text-[var(--rv-white)] font-semibold mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-md text-[var(--rv-white)] ">
                {services.map((item,index) => (
                  <li key={index}>
                    <Link href={`${item.href}`} className="hover:text-[var(--rv-secondary)]">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
            <h4 className="relative text-lg text-[var(--rv-white)] font-semibold mb-4">
                Tools
              </h4>
              <ul className="space-y-2 text-sm text-[var(--rv-white)]">
                {tools.map((item,index) => (
                  <li key={index}>
                    <Link href={item.href} className="hover:text-[var(--secondary)]">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            

            {/* Get in Touch */}
            <div>
            <h4 className="relative text-lg text-[var(--rv-white)] font-semibold mb-4 ">
                Get In Touch
              </h4>
              <ul className="space-y-5 text-sm text-[var(--rv-white)]">
                <li className="flex gap-2 hover:text-[var(--secondary)] cursor-pointer">
                  <span><FaPhone className=""/></span>
                  <h5 className="font-medium">
                     +91 7234526252
                  </h5>
                </li>
                <li className="flex gap-2 hover:text-[var(--secondary)] cursor-pointer">
                <FaEnvelope/>
                  <h5 className="font-medium">
                     redvission@gmail.com
                  </h5>
                </li>
                <li className="flex gap-2 hover:text-[var(--secondary)] cursor-pointer">
                <FaMapLocation/>
                  <h5 className="font-medium">
                     Nipania,Indore
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <div className="">
        <div className="container mx-auto mt-8 px-3 md:px-5 lg:px-10 flex flex-col lg:flex-row items-center justify-between">
          
        <div className="disclaimer-sec text-center border-b border-gray-200">
          <div className="flex justify-center space-x-4 mb-5">
                <Link href="#" className="p-2 border border-white rounded-full">
                  <FaFacebook className="text-gray-400 text-2xl hover:text-blue-400 " />
                </Link>
                <Link href="#" className="p-2 border border-white rounded-full">
                  <FaTwitter className="text-gray-400 text-2xl hover:text-blue-400" />
                </Link>
                <Link href="#" className="p-2 border border-white rounded-full">
                  <FaInstagram className="text-gray-400 text-2xl hover:text-blue-400"/>
                </Link>
                <Link href="#" className="p-2 border border-white rounded-full">
                  <FaPinterest className="text-gray-400 text-2xl hover:text-blue-400"/>
                </Link>
              </div>
              <div className="content-b ">
                <p className>
                  {/* AMFI Registered Mutual Fund Distributor | ARN : <b>321225</b>  */}
                  {/* Date of Registration: <b>09-FEB-2025</b> | Current Validity:{" "}
                  <b>09-FEB-2025</b> TO <b>08-FEB-2028</b> */}
                </p>
                
                <p className="text-gray-200 mb-2">
                  <b>Redvission</b> is an AMFI
                  Registered Mutual Fund Distributor.
                </p>
                <p className="text-gray-200 mb-2">
                  Disclaimer: Mutual fund investments are subject to market
                  risks. Please read the scheme information and other related
                  documents carefully before investing. Past performance is not
                  indicative of future returns. Please consider your specific
                  investment requirements before choosing a fund, or designing a
                  portfolio that suits your needs.
                </p>
                <p className="text-gray-200 mb-5">
                  <b>Redvission</b> makes no warranties or representations,
                  express or implied, on products offered through the platform
                  of <b>Redvission</b>. It accepts no liability for any
                  damages or losses, however, caused, in connection with the use
                  of, or on the reliance of its product or related services.
                  Terms and conditions of the website are applicable.
                  Investments in Securities markets are subject to market risks,
                  read all the related documents carefully before investing.
                </p>
                <div className="footer-content pb-4 flex flex-col  gap-10 items-center justify-center mt-2">
                  <div className="footer-list flex flex-col items-center md:flex-row gap-2 ">
                    <div className="image">
                      <img src="/amfi.jpg" height={100} width={100} />
                    </div>
                    <div className="contentb text-gray-200">
                      <p>AMFI Registered</p>
                      <p>ARN - 00001</p>
                      <p>EUIN -00000001  </p>{" "}
                    </div>
                  </div>
                  <div className="footer-list">
                    <div className="image">
                      <img src="/mutualfund.png"  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className=" ">
        <div className="container mx-auto px-3 md:px-5 lg:px-18 mt-4 flex flex-col lg:flex-row items-center justify-between">
          {/* Logo */}
          

          {/* Copyright Text */}
          <div className="text-center text-[var(--rv-white)] ">
            <p>© 2025  All right reserved</p>
          </div>

          <div>
          <p className="p-2 text-[var(--rv-white)] text-center ">
                  {" "}
                  <Link href="/privacy-policy" className="hover:text-[var(--secondary)] cursor-pointer">Privacy Policy</Link>|{" "}
                  <Link href="/commission-disclosures" className="hover:text-[var(--secondary)] cursor-pointer">
                    Commission Disclosures
                  </Link>{" "}
                  |
                  <Link href="/AMFI_Code-of-Conduct1.pdf" target="_" download className="hover:text-[var(--secondary)] cursor-pointer">
                    Code of Conducts
                  </Link>
                </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
