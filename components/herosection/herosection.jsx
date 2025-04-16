// components/GetStartedBanner.tsx
export default function HeroSection() {
  return (
    <section className="realative top-0 w-full h-[770px]  bg-[url('/Herosection.webp')] bg-cover bg-bottom text-white ">
      <div className="container  mx-auto px-4 lg:px-10 pt-42 md:pt-42">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Invest in Professionally <br /> Managed Funds
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
        </p>

        {/* New Buttons */}
        <div className="flex flex-wrap gap-4">
          <div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] px-6 py-4 rounded-xl border border-white/20 shadow-md">
            <h2 className="text-xl font-semibold">Direct</h2>
            <p className="text-sm text-gray-200">Mutual Funds (₹0 Brokerage)</p>
          </div>
          <div className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] px-6 py-4 rounded-xl border border-white/20 shadow-md">
            <h2 className="text-xl font-semibold">₹100</h2>
            <p className="text-sm text-gray-200">Start SIPs with as low as ₹100!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
