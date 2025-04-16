"use client"
import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

// FAQ Component
export function FAQ() {
  const faqs = [
    {
      question: "Why should I choose Redvission to manage my investments?",
      answer:
        "At Redvission, we don’t just recommend products—we build portfolios aligned with your life goals. With a research-driven approach, personalized advice, and no direct fees, we ensure your wealth works harder for you.",
    },
    {
      question: "Is my money safe if I invest through Redvission?",
      answer: "Absolutely. Your investments are held with SEBI-registered mutual funds, PMS, and AIF providers. We don’t handle your money directly—our role is to guide, not control.",
    },
    {
      question: "Do I have to pay anything to get started?",
      answer: "No. We don’t charge you any upfront or advisory fees. We’re compensated by AMCs via trail commissions, which means you get expert support at no extra cost.",
    },
    {
      question: "What kind of investors do you work with?",
      answer: "Whether you're just starting your investment journey or managing a multi-crore portfolio, we tailor our strategies to fit your goals, risk appetite, and time horizon.",
    },
    {
      question: "Will I get regular updates and personal support?",
      answer: "Yes! We provide timely portfolio reviews, performance insights, and are always a call away for questions or changes. You’ll never feel lost in the process.",
    },
    {
      question: "I’ve already invested elsewhere. Can you still help?",
      answer: "Of course. We offer portfolio reviews and restructuring to eliminate overlaps, reduce costs, and improve returns—without disturbing what’s already working for you.",
    },
   
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[var(--rv-ternary)]  padding-top-section padding-bottom-section  text-center items-center">
      <h2 className="text-4xl text-white font-bold mb-4">Frequently Asked <span className="text-[var(--rv-secondary)]">Questions</span></h2>
      <div className="container mx-auto text-left flex flex-col lg:flex-row items-center gap-6 mt-10 px-3 md:px-5 lg:px-10">
  {/* Left Image Section */}
  <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[530px]">
    <Image
      src="/faq.png"
      alt="FAQ"
      fill
      className="object-cover rounded-lg shadow-md"
    />
  </div>

  {/* Right FAQ Section */}
  <div className="w-full lg:w-1/2">
    {faqs.map((faq, index) => (
      <div key={index} className="mb-2 border border-white rounded-2xl overflow-hidden">
        <Button
          className="items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow  w-full flex justify-between text-left  whitespace-normal p-5 bg-[var(--rv-ternary)]"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <span className="text-[16px] md:text-lg font-bold text-white text-left break-words hover:text-[var(--rv-secondary)]">
  {faq.question}
</span>
          {openIndex === index ? (
            <MinusIcon className="w-5 h-5 text-white " />
          ) : (
            <PlusIcon className="w-5 h-5 text-white" />
          )}
        </Button>
        {openIndex === index && (
          <div className="p-4 bg-[var(--rv-ternary)] text-white border-t">{faq.answer}</div>
        )}
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
