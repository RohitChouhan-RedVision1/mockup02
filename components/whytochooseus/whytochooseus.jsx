"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const WhyChooseUs = () => {
  const mainCounterRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(mainCounterRef, { once: true, threshold: 0.3 });

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Observer for triggering counter animation
  useEffect(() => {
    if (isMobile || !isInView) return;

    const counters = mainCounterRef.current?.querySelectorAll(".count");
    counters?.forEach((counter) => {
      if (!counter.classList.contains("counter-started")) {
        startCounter(counter);
        counter.classList.add("counter-started");
      }
    });
  }, [isInView, isMobile]);

  // Counter logic
  const startCounter = (counter) => {
    const target = parseInt(
      counter.querySelector(".counter-number").getAttribute("data-target")
    );
    let current = 0;
    const step =
      parseInt(counter.getAttribute("data-step")) ||
      (target >= 500 ? (target >= 5000 ? 500 : 20) : 1);

    const interval = setInterval(() => {
      if (current < target) {
        current += step;
        if (current > target) current = target;
        counter.querySelector(".counter-value").innerText = current;
      } else {
        clearInterval(interval);
      }
    }, 150);
  };

  return (
    <div className="bg-[var(--rv-ternary)] padding-top-section padding-bottom-section">
      <section
        className="text-white container mx-auto px-4 lg:px-10"
        ref={mainCounterRef}
      >
        <motion.h2
          className="text-4xl md:text-4xl font-bold mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why <span className="text-cyan-400">Choose</span> Us?
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start gap-4">
          {/* Left: Image + Paragraph (50%) */}
          <motion.div
            className="lg:w-[50%] w-full space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-md overflow-hidden">
              <Image
                src="/whytochoose.png"
                alt="Analytics"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-md text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip.
            </p>
          </motion.div>

          {/* Right: Counters (50%) */}
          <motion.div
            className="lg:w-[50%] w-full space-y-12 pl-0 lg:pl-10"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <div className="count" data-step="1">
              <div
                className="text-4xl font-bold text-cyan-400 counter-number"
                data-target="10"
                style={{
                  font: "bold 80px Arial",
                  color: "transparent",
                  WebkitTextFillColor: "#01122F ",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#00DBFC",
                  textShadow: "0px 0px 5px #00DBFC",
                }}
              >
                <span className="counter-value">0</span>+
              </div>
              <p className="text-lg border-t border-gray-700 pt-2">
                Years of Experience
              </p>
            </div>

            <div className="count" data-step="20">
              <div
                className="text-4xl font-bold text-cyan-400 counter-number"
                data-target="150"
                style={{
                  font: "bold 80px Arial",
                  color: "transparent",
                  WebkitTextFillColor: "#01122F ",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#00DBFC",
                  textShadow: "0px 0px 5px #00DBFC",
                }}
              >
                <span className="counter-value">0</span>+
              </div>
              <p className="text-lg border-t border-gray-700 pt-2">
                Asset Under Management (cr)
              </p>
            </div>

            <div className="count" data-step="500">
              <div
                className="text-4xl font-bold text-cyan-400 counter-number"
                data-target="11000"
                style={{
                  font: "bold 80px Arial",
                  color: "transparent",
                  WebkitTextFillColor: "#01122F ",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#00DBFC",
                  textShadow: "0px 0px 5px #00DBFC",
                }}
              >
                <span className="counter-value">0</span>+
              </div>
              <p className="text-lg border-t border-gray-700 pt-2">
                People Managed
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
