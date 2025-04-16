// components/Features.tsx
import Image from "next/image";

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

export default function Features() {
  return (
    <div className="padding-top-section padding-bottom-section">
      <section className=" container mx-auto text-white px-10 ">
        <div className=" grid md:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Top <span className="text-cyan-400">Features</span> We Provide
            </h2>
            <p className="text-gray-300 text-lg mt-4 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.
            </p>
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
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
                    <p className="text-gray-400 text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side image */}
          <div className="flex justify-center relative md:top-40">
            <div className="absolute bottom-0 md:left-30 w-[700px] h-[180px] md:h-[250px] bg-[#01122F] z-10 "></div>
            <Image
              src="/icons/mobile1.png" // Replace this with actual mobile report image
              alt="Mobile Report"
              width={450}
              height={300}
              className="rounded-xl shadow-lg "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
