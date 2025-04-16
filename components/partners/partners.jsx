"use client";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";
const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };
const SubscribCard = () => {
    const images = [
        "/mf-logos/1.webp",
        "/mf-logos/2.webp",
        "/mf-logos/3.webp",
        "/mf-logos/4.webp",
        "/mf-logos/5.webp",
        "/mf-logos/6.webp",
        "/mf-logos/7.webp",
        "/mf-logos/8.webp",
        "/mf-logos/9.webp",
        "/mf-logos/10.webp",
        "/mf-logos/11.webp",
        "/mf-logos/1.webp",
        "/mf-logos/2.webp",
        "/mf-logos/3.webp",
        "/mf-logos/4.webp",
        "/mf-logos/5.webp",
        "/mf-logos/6.webp",
        "/mf-logos/7.webp",
        "/mf-logos/8.webp",
        "/mf-logos/9.webp",
        "/mf-logos/10.webp",
        "/mf-logos/11.webp",
    ];
    return (
        <section className="bg-[var(--rv-ternary)]">
            <div className="max-w-screen-xl  md:px-10 py-4 md:py-12 mx-auto text-center ">
                {/* <motion.h2 initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={0}
           className="topheading  text-[#0E314D] ">PARTNERS</motion.h2> */}
           <h2 className="text-4xl font-bold mb-6 text-white text-center">
          Our <span className="text-[var(--rv-secondary)]">Partners</span>
        </h2>
            <Carousel
                className="w-full mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent className="">
                    {images.map((src, index) => (
                        <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/6">
                            <div className=" ">
                                <Image
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className=" transition ease-in-out duration-75"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
        </section>
    );
};

export default SubscribCard;