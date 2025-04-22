// components/GetStartedBanner.tsx
'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="realative top-0 w-full h-[770px]  bg-[url('/Herosection.webp')] bg-cover bg-bottom text-white ">
      <div className="container  mx-auto px-4 lg:px-10 pt-42 md:pt-42">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        >
          Invest in Professionally <br /> Managed Funds
        </motion.h1>
        <motion.p className="text-gray-300 text-lg mb-8 max-w-xl"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 1.8, duration: 0.8 }}
         >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
        </motion.p>

        {/* New Buttons */}
        <div className="flex flex-wrap gap-4">
          <motion.div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] px-6 py-4 rounded-xl border border-white/20 shadow-md"
           initial={{ y: 50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 2.4, duration: 0.8 }}
           >
            <h2 className="text-xl font-semibold">Direct</h2>
            <p className="text-sm text-gray-200">Mutual Funds (₹0 Brokerage)</p>
          </motion.div>
          <motion.div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] px-6 py-4 rounded-xl border border-white/20 shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          >
            <h2 className="text-xl font-semibold">₹100</h2>
            <p className="text-sm text-gray-200">Start SIPs with as low as ₹100!</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
