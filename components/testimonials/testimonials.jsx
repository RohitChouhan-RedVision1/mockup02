'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Client One',
    designation: 'Designation',
    image: '/clients/client1.jpg',
    rating: 4,
    text: 'Client One testimonial goes here.',
  },
  {
    name: 'Client Two',
    designation: 'Designation',
    image: '/clients/client2.jpg',
    rating: 5,
    text: 'Client Two testimonial goes here.',
  },
  {
    name: 'Client Three',
    designation: 'Designation',
    image: '/clients/client3.jpg',
    rating: 3,
    text: 'Client Three testimonial goes here.',
  },
  {
    name: 'Client Four',
    designation: 'Designation',
    image: '/clients/client4.jpg',
    rating: 4,
    text: 'Client Four testimonial goes here.',
  },
  {
    name: 'Client Five',
    designation: 'Designation',
    image: '/clients/client5.jpg',
    rating: 5,
    text: 'Client Five testimonial goes here.',
  },
  {
    name: 'Client Six',
    designation: 'Designation',
    image: '/clients/client6.jpg',
    rating: 4,
    text: 'Client Six testimonial goes here.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClient = testimonials[activeIndex];

  // Show current + previous and next client for thumbnails
  const getVisibleClients = () => {
    const visible = [];
    if (activeIndex > 0) visible.push(testimonials[activeIndex - 1]);
    visible.push(testimonials[activeIndex]);
    if (activeIndex < testimonials.length - 1) visible.push(testimonials[activeIndex + 1]);
    return visible;
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
    <div className="bg-[var(--rv-bg-primary)] padding-bottom-section padding-top-section">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col items-center text-white">
          <h2 className="text-4xl font-bold mb-6 text-center text-white">
            Our <span className="text-[var(--rv-secondary)]">Testimonials</span>
          </h2>

          <div className="flex gap-6 w-full justify-center min-h-[300px] md:max-w-6xl mx-auto relative">
            {/* Active Testimonial */}
            <div className="flex-1 bg-[#0C2442] rounded-md p-6 space-y-4 shadow-md border border-[#d4d4d42e]">
              <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                {'★'.repeat(activeClient.rating)}
                {'☆'.repeat(5 - activeClient.rating)}
              </div>
              <p className="text-lg text-white/80">{activeClient.text}</p>
              <div className="flex items-center gap-4 pt-4">
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
            </div>

            {/* Thumbnails & Controls */}
            <div className="hidden md:w-1/3 md:flex gap-4 relative h-72">
              <div className="flex flex-col gap-4 w-full">
                {getVisibleClients().map((client, idx) => {
                  const isActive = client.name === activeClient.name;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 border border-[#d4d4d42e] ${
                        isActive ? ' bg-[var(--rv-bg-secondary)] text-black' : 'bg-[#0C2442]'
                      }`}
                      onClick={() => setActiveIndex(testimonials.findIndex(t => t.name === client.name))}
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
            </div>

            {/* Mobile Nav */}
            <div className="absolute right-0 bottom-[-50px] md:hidden flex gap-2">
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
