import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Button } from "@/components/ui/button";
  import Link from "next/link";
  import React from "react";
import { getSiteData } from "../layout";
  
  export const metadata = {
    title: "About Us - Renaissance Financial Wealth",
    description:
      "Learn more about Renaissance Financial  Wealth, your trusted financial partner in India.",
  };
  
  const AboutUsPage = async () => {
    const sitedata = await getSiteData()
    return (
      <div>
        <div>
        <div className="bg-gradient-to-b from-white to-[#26E8AC] pt-[130px] pb-[50px]">
        <div className="container mx-auto px-4 md:px-32 pt-12 pb-2 ">
        <div className="  mb-8">
              <h1 className="text-5xl pb-5 font-bold text-black">About Us</h1>
              <Breadcrumb>
                <BreadcrumbList className="text-black text-center items-center">
                  <BreadcrumbItem>
                    <BreadcrumbLink className="text-center items-center text-black" href="/">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-black">About Us</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <p className="text-xl text-black mt-2">
                Your Trusted Financial Partner
              </p>
            </div>
        </div>
        </div>
          <div className="container mx-auto px-4 md:px-32 pt-12 pb-12">
            {/* Heading and Subheading */}
            
  
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-xl text-gray-700">
              Step into the world of {sitedata.title}, your trusted partner in financial services. We recognize that your financial journey is more than just transactions; it's the path to realizing your life's dreams. At {sitedata.title}, we are committed to making those dreams come true. <br /><br />
Our story begins with a simple pledge: to empower every individual in India to attain their financial goals and protect what matters most. Life's uncertainties may be challenging, but we firmly believe that with the right guidance and support, you can overcome them. <br /><br />
Our team of financial experts is here to offer you personalised solutions, ensuring that you are on the right path to financial well-being. The relationships we've forged with our clients are the foundation of our work, and their success stories inspire us each day. <br /><br />
In an ever-evolving world, our commitment to securing your financial future remains unwavering. Your dreams take precedence, and your trust is the bedrock of our service.

              </p>
            </div>
  
            {/* Our Mission and Values */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 mb-4">
                At {sitedata.title} Wealth, Our mission is to provide accessible and personalized financial services, empowering individuals across India to achieve financial success. We are dedicated to offering expert guidance, making financial services available to all, and ensuring every Indian can turn their financial aspirations into reality.

              </p>

              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-xl text-gray-700 mb-4">
              At {sitedata.title} Wealth, Our vision is to become the leading force in shaping a financially secure and prosperous India. We aim to set new standards in the financial industry and be the go-to partner for those seeking financial stability, growth, and success, contributing to a brighter future for our clients and the nation as a whole.
              </p>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Values
              </h2>

              <p className="text-xl text-gray-700 mb-4">
              At {sitedata.title} Wealth, Our core values include accessibility, empathy, trust, innovation, excellence, collaboration, and social responsibility. We are committed to making financial services accessible to all, understanding our client's unique needs, building trust through integrity, driving innovation, and striving for excellence.

              </p>
              {/* <ul className="list-disc pl-5 space-y-4 flex-col items-start">
                <li>
                  <p className="text-xl text-gray-700">
                    <strong>Integrity:</strong> We uphold the highest standards of
                    honesty and transparency in all our dealings.
                  </p>
                </li>
                <li>
                  <p className="text-xl text-gray-700">
                    <strong>Customer-Centric:</strong> We put our clients at the
                    heart of everything we do, offering solutions that truly meet
                    their needs.
                  </p>
                </li>
                <li>
                  <p className="text-xl text-gray-700">
                    <strong>Innovation:</strong> We embrace new technologies and
                    ideas to improve our services and create more value for our
                    clients.
                  </p>
                </li>
                <li>
                  <p className="text-xl text-gray-700">
                    <strong>Commitment:</strong> We are committed to helping our
                    clients achieve their financial goals and secure their future.
                  </p>
                </li>
              </ul> */}
            </div>
  
            {/* Why Choose Us */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-700">
                In a rapidly changing world, we remain steadfast in our dedication
                to helping you secure your financial future. Your dreams are our
                top priority, and your trust is the cornerstone of our service.
                Our personalized approach ensures that every financial solution is
                tailored to meet your unique needs, helping you move towards
                financial freedom with confidence.
              </p>
            </div>
  
            {/* Conclusion and CTA */}
            <div className="text-center mt-8">
              <p className="text-xl text-gray-700 mb-4">
                We invite you to join us on this journey towards your financial
                success. Our team is always here to assist you with expert advice,
                innovative solutions, and unmatched dedication.
              </p>
              <Link href="/contactus" className="text-white mt-4 cursor-pointer">
                <Button className="font-bold bg-[var(--secondary)] px-4 py-2 rounded-lg text-2xl cursor-pointer">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUsPage;