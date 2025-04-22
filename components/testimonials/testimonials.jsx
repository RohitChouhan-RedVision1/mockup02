'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Rohit',
    designation: 'Devloper',
    image: '/client.png',
    rating: 4,
    text: 'RedVsion has redefined my investment experience. Their AI-driven insights, transparent approach and customized strategies has given me complete confidence.Its not just about returns-its about clarity, trust and true wealth-building.',
  },
  {
    name: 'Harsh',
    designation: 'CEO',
    image: '/client.png',
    rating: 4,
    text: 'RedVsion has redefined my investment experience. Their AI-driven insights, transparent approach and customized strategies has given me complete confidence.Its not just about returns-its about clarity, trust and true wealth-building.',
  },
  {
    name: 'Anuj',
    designation: 'Founder',
    image: '/client.png',
    rating: 4,
    text: 'RedVsion has redefined my investment experience. Their AI-driven insights, transparent approach and customized strategies has given me complete confidence.Its not just about returns-its about clarity, trust and true wealth-building.',
  },
  {
    name: 'Jay',
    designation: 'Designer',
    image: '/client.png',
    rating: 4,
    text: 'RedVsion has redefined my investment experience. Their AI-driven insights, transparent approach and customized strategies has given me complete confidence.Its not just about returns-its about clarity, trust and true wealth-building.',
  },
  {
    name: 'Ajay',
    designation: 'Sr. Devloper',
    image: '/client.png',
    rating: 4,
    text: 'RedVsion has redefined my investment experience. Their AI-driven insights, transparent approach and customized strategies has given me complete confidence.Its not just about returns-its about clarity, trust and true wealth-building.',
  },
  {
    name: 'Rahul',
    designation: 'sales person',
    image: '/client.png',
    rating: 4,
    text: 'RedVsion has redefined my investment experience. Their AI-driven insights, transparent approach and customized strategies has given me complete confidence.Its not just about returns-its about clarity, trust and true wealth-building.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClient = testimonials[activeIndex];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -100px 0px' });

  const getVisibleClients = () => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (activeIndex + 1) % testimonials.length;
    return [testimonials[prevIndex], activeClient, testimonials[nextIndex]];
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      ref={sectionRef}
      className="bg-[var(--rv-bg-primary)] padding-bottom-section padding-top-section"
    >
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex flex-col items-center text-white">
          {/* Heading Animation */}
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl font-bold mb-6 text-center text-white"
          >
            Our <span className="text-[var(--rv-secondary)]">Testimonials</span>
          </motion.h2>

          <div className="flex gap-6 w-full justify-center min-h-[300px] lg:max-w-6xl mx-auto relative">
            {/* Active Testimonial Animation */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex-1 bg-[#0C2442] rounded-md p-6 space-y-4 shadow-md border border-[#d4d4d42e]"
            >
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                {'★'.repeat(activeClient.rating)}
                {'☆'.repeat(5 - activeClient.rating)}
              </div>
              <p className="text-lg text-white/80">{activeClient.text}</p>
              <div className="flex items-end gap-4 pt-4">
                <img
                  src={activeClient.image}
                  alt="Client"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-[var(--rv-secondary)] font-bold">{activeClient.name}</div>
                  <div className="text-white/70">{activeClient.designation}</div>
                </div>
              </div>
            </motion.div>

            {/* Thumbnails + Buttons Animation */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="hidden lg:w-1/3 lg:flex gap-4 relative h-72"
            >
              <div className="flex flex-col gap-4 w-full">
                {getVisibleClients().map((client, idx) => {
                  const isActive = client.name === activeClient.name;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 border border-[#d4d4d42e] ${
                        isActive ? ' bg-[var(--rv-bg-secondary)] text-black' : 'bg-[#0C2442]'
                      }`}
                      onClick={() =>
                        setActiveIndex(testimonials.findIndex((t) => t.name === client.name))
                      }
                    >
                      <img
                        src={client.image}
                        alt="Client"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-bold">{client.name}</div>
                        <div className="text-sm">{client.designation}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Nav Buttons */}
              <div className="absolute -right-12 top-1/3 flex-col gap-4 hidden md:flex">
                <button
                  onClick={prevSlide}
                  className="bg-[#0C2442] p-2 rounded shadow hover:bg-cyan-600 border border-[#d4d4d42e]"
                >
                  <ChevronUp className="text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-[#0C2442] p-2 rounded shadow hover:bg-cyan-600 border border-[#d4d4d42e]"
                >
                  <ChevronDown className="text-white" />
                </button>
              </div>
            </motion.div>

            {/* Mobile Nav */}
            <div className="absolute right-0 bottom-[-50px] lg:hidden flex gap-2">
              <button
                onClick={prevSlide}
                className="bg-[#0C2442] p-2 rounded shadow hover:bg-cyan-600 border border-[#d4d4d42e] rotate-90"
              >
                <ChevronDown className="text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#0C2442] p-2 rounded shadow hover:bg-cyan-600 border border-[#d4d4d42e] rotate-90"
              >
                <ChevronUp className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
