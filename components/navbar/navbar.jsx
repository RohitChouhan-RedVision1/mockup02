"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const servicedata = [
  {
    name: "Mutual Funds",
    link: "/services/mutual-funds",
    description:
      "Invest in a diverse range of mutual funds tailored to your financial goals.",
    imageSrc: "/images/services/mutual-funds.jpg",
  },
  {
    name: "Insurance Planning",
    link: "/services/insurance",
    description:
      "Comprehensive insurance planning for life, health, and assets.",
    imageSrc: "/images/services/insurance.jpg",
  },
  {
    name: "Retirement Planning",
    link: "/services/retirement",
    description: "Plan your golden years with tailored retirement strategies.",
    imageSrc: "/images/services/retirement.jpg",
  },
  {
    name: "Tax Planning",
    link: "/services/tax",
    description:
      "Optimize your tax liabilities with expert strategies and tools.",
    imageSrc: "/images/services/tax.jpg",
    children: [],
  },
  {
    name: "Corporate FDs",
    link: "/services/corporate-fds",
    description:
      "Get higher interest returns with secure Corporate Fixed Deposits.",
    imageSrc: "/images/services/corporate-fds.jpg",
    children: [],
  },
];
const Navbar = () => {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdownTools, setOpenDropdownTools] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change '10' to the scroll threshold you want
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMainClick = (type) => {
    if (isMobile) {
      if (type === "services") {
        setOpenDropdown(!openDropdown);
      } else if (type === "tools") {
        setOpenDropdownTools(!openDropdownTools);
      }
    }
  };

  const fetchSearchResults = async (query) => {
    if (!query) {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_DATA_API}/api/all-scheme-portfolio?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      if (response.status === 200) {
        const data = response.data.data;
        const filteredResults = data.filter((item) =>
          item.funddes.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredResults);
        setIsSearchOpen(true);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    fetchSearchResults(query);
  };

  const handleSelectScheme = (items) => {
    const slug = items.funddes
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "");

    setSearchQuery("");
    setSearchResults([]);
    setIsSearchOpen(false);
    const url = `/performance/single-fund/${slug}?pcode=${items.pcode}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
    window.open(url);
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 ${
        isMobileMenuOpen
          ? "bg-[#01387D]"
          : isScrolled
          ? "bg-[#01387D] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className={` container mx-auto px-4  lg:px-10  transition-colors duration-300 `}
      >
        <div className="  flex flex-wrap items-center justify-between mx-auto py-2 lg:py-6 px-3 md:px-0">
          <Link href="/" className="">
            <div className="w-24 ">
              <Image
                src="/logo.png"
                alt="logo"
                width={30}
                height={30}
                className="rounded"
                layout="responsive"
              />
            </div>
          </Link>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Search Bar */}
          <div
            className="relative mt-2 lg:mt-0 lg:ml-4 w-full lg:w-auto"
            ref={searchRef}
          >
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Funds..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="border-gray-300 text-gray-700 bg-white placeholder-gray-400 focus:ring-gray-500 focus:border-gray-500 rounded-full w-full  lg:w-80 pl-10 pr-10 py-2" // Responsive width
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
            <AnimatePresence>
              {isSearchOpen && searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full mt-2 bg-white z-10 rounded-lg shadow-lg w-full  lg:w-80 max-h-60 overflow-y-auto ring-1 ring-gray-700"
                >
                  <ul className="py-2 text-sm">
                    {searchResults.map((result, index) => (
                      <li key={index}>
                        <div
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() => handleSelectScheme(result)}
                        >
                          {result.funddes}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full lg:block lg:w-auto`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg lg:space-x-5 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 text-white lg:items-center text-lg">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded md:bg-transparent ${
                    path === "/"
                      ? "text-[var(--rv-primary)]"
                      : "text-gray-800"
                  } lg:p-0 hover:text-[var(--rv-primary)]`}
                  aria-current="page"
                >
                  <p className="font-medium text-white hover:text-[#00F6FF]">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`block py-2 px-3 rounded md:bg-transparent ${
                    path === "/about-us"
                      ? "text-[var(--rv-primary)]"
                      : "md:text-gray-800"
                  } lg:p-0 md:hover:text-[var(--rv-primary)]`}
                >
                  <p className="font-medium text-white hover:text-[#00F6FF]">
                    About Us
                  </p>
                </Link>
              </li>
              <li
                className={`relative ${!isMobile ? "group" : ""}`}
                onMouseEnter={
                  !isMobile ? () => setOpenDropdown(true) : undefined
                }
                onMouseLeave={
                  !isMobile ? () => setOpenDropdown(false) : undefined
                }
              >
                <button
                  id="dropdownServicesLink"
                  className="flex items-center justify-between w-full py-2 px-3  text-white hover:text-[#00F6FF] md:hover:bg-transparent  lg:p-0 lg:w-auto font-semibold"
                  onClick={handleMainClick}
                >
                  <p className="font-medium text-white hover:text-[#00F6FF]">
                    Services
                  </p>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute left-0 z-10 ${
                    openDropdown ? "block" : "hidden"
                  } ${
                    !isMobile ? "lg:hidden lg:group-hover:block" : ""
                  } bg-white divide-y divide-gray-900 rounded-lg shadow-lg w-full lg:w-72 ring-2`}
                >
                  <ul className="py-2 text-sm text-gray-800 max-h-[400px] overflow-y-auto">
                    {servicedata.map((service, index) => (
                      <li key={index} className="group relative">
                        <Link
                          href={service.link}
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        >
                          {service.name}
                        </Link>
                        {/* {service.children?.length > 0 && (
                        <ul className="absolute left-full top-0 ml-1 w-72 bg-white border rounded-lg shadow-lg z-20 hidden group-hover:block">
                          {service.children.map((child, cIdx) => (
                            <li key={cIdx}>
                              <Link
                                href={child.link}
                                className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )} */}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li
                className={`relative ${!isMobile ? "group" : ""}`}
                onMouseEnter={
                  !isMobile ? () => setOpenDropdownTools(true) : undefined
                }
                onMouseLeave={
                  !isMobile ? () => setOpenDropdownTools(false) : undefined
                }
              >
                <button
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full py-2 px-3 text-white hover:text-[#00F6FF] lg:hover:bg-transparent lg:border-0  lg:p-0 lg:w-auto font-semibold"
                  onClick={handleMainClick}
                >
                  <p>Tools</p>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 z-10 ${
                    openDropdownTools ? "block" : "hidden"
                  } ${
                    !isMobile ? "lg:hidden lg:group-hover:block" : ""
                  } bg-white divide-y divide-gray-900 rounded-lg shadow w-full lg:w-60 ring-2`}
                >
                  <ul
                    className="py-2 text-sm text-gray-800"
                    aria-labelledby="dropdownNavbarLink"
                  >
                    <li>
                      <Link
                        href="/tools/download-forms"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Download Forms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/calculators"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Financial Calculators
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/financial-health"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Financial Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/risk-profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Risk Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/pay-premium-online"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pay Premium Online
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/usefullinks"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Useful links
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`block py-2 px-3 text-gray-800 rounded bg-transparent ${
                    path === "/blogs"
                      ? "text-white hover:text-[#00F6FF]"
                      : "md:text-gray-800"
                  } lg:p-0 `}
                >
                  <p className="font-medium text-white hover:text-[#00F6FF]">
                    Blogs
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={`block py-2 px-3 rounded ${
                    path === "/contact-us"
                      ? "text-[var(--rv-primary)]"
                      : "md:text-gray-800"
                  } lg:p-0 md:hover:text-[var(--rv-primary)]`}
                >
                  <p className="font-medium text-white hover:text-[#00F6FF]">
                    Contact Us
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className={`block py-2 px-3 text-gray-800 rounded md:bg-transparent ${
                    path === "/login"
                      ? "text-white hover:text-[#00F6FF]"
                      : "md:text-gray-800"
                  } lg:p-0 `}
                >
                  <p className="font-medium text-white hover:text-[#00F6FF]">
                    Login
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
