import P from "../assets/price-logo.svg";
export default function PricingHero() {
  return (
    <div className="bg-gradient-to-b from-white from-50% to-[#26262B] to-50%">
      <div className=" border-t-1 border-gray-500 mx-auto py-10"></div>
      <div className="w-full min-h-[400px] max-w-7xl bg-[#F5F5F5] mx-auto  px-6 rounded-2xl shadow-md flex items-center">
        <div className="max-w-4xl px-10 py-16">
          {/* Logo / Icon */}
          <div className="mb-8">
            <img src={P} alt="Pricing Hero Icon" width={60} height={60} />
          </div>

          {/* Text */}
          <h1 className="text-4xl font-semibold text-gray-900 leading-tight mb-4">
            Superpowers starting $9.99/month.
            <br />
            Free for 7 days.
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium cursor-pointer">
              Get started now
            </button>

            <button className="border border-gray-300 text-gray-900 px-6 py-3 rounded-md font-medium cursor-pointer">
              More about Setapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
