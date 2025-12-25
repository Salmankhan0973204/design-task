import img1 from "../assets/showcase1.png";
import img2 from "../assets/showcase2.png";
import img3 from "../assets/showcase3.png";
import arrow from "../assets/arrow.png";

export default function Showcase() {
  return (
    <section className="bg-[#26262B] py-10 ">
      <div className="border-t-2 border-gray-500 w-11/12 mx-auto py-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between  mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What you get on Setapp
          </h2>
          <p className="text-gray-400 mt-3">
            With a single monthly subscription at $9.99, you get 240+ apps for
            your Mac.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={img1}
            alt="Main feature"
            className="md:col-span-2 w-full rounded-2xl shadow-xl object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
          <img
            src={img2}
            alt="Code editor"
            className="w-full rounded-2xl shadow-xl object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
          <img
            src={img3}
            alt="Meetings"
            className="w-full rounded-2xl shadow-xl object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>

        <div className=" flex  justify-center gap-2  mt-15">
          <img src={arrow} alt="" width={27} className="h-5 mt-1.5" />
          <p className="text-[20px]  text-white">
            View all superpowers
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between my-15">
          <h2 className="text-3xl text-white">
            Your Setapp journey.
          </h2>
          <p className="text-gray-400 mt-3 md:mt-0">
            Type in your task into Setapp search and get instant app
            recommendations.
          </p>
        </div>
      </div>
      <div className="border-t-2 border-gray-500 w-11/12 mx-auto py-10"></div>
    </section>
  );
}
