'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/icons/portfolio-analysis.png",
    title: "Portfolio Analysis",
    description:
      "Lorem ipsum dolor sit amet, consectetuer elit, nibh euismod tincidunt ut laoreet.",
  },
  {
    icon: "/icons/invest-online.png",
    title: "Invest Online",
    description: "Lorem ipsum dolor sit amet, consectetuer elit nibh.",
  },
  {
    icon: "/icons/goal-tracker.png",
    title: "Goal Tracker",
    description: "Lorem ipsum dolor sit amet, consectetuer elit, nibh euismo.",
  },
  {
    icon: "/icons/online-kyc.png",
    title: "Online KYC",
    description: "Lorem ipsum dolor sit amet elit, nibhuch euismod tincidunt.",
  },
];

// Container variants for staggering feature items
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.2,
    },
  },
};

// Variants for individual feature animation
const featureVariants = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function Features() {
  return (
    <div className="padding-top-section padding-bottom-section">
      <section className="container mx-auto text-white px-4 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div>
            {/* Heading */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Top <span className="text-cyan-400">Features</span> We Provide
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="text-gray-300 text-lg mt-4 mb-8"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.
            </motion.p>

            {/* Feature List with staggered animation */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  variants={featureVariants}
                >
                  <div className="bg-[#012052] rounded p-2">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{feature.title}</h4>
                    <p className="text-gray-400 text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side image block */}
          <motion.div
            className="flex justify-center relative lg:top-40"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute bottom-0 lg:left-30 w-[700px] h-[180px] lg:h-[250px] bg-[#01122F] z-10"></div>
            <Image
              src="/icons/mobile1.png"
              alt="Mobile Report"
              width={450}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
