import "../styles/TopSection.scss";
import img1 from "../assets/topsec1.svg";
import img2 from "../assets/topsec2.svg";
import img3 from "../assets/topsec3.svg";
import img4 from "../assets/topsec4.svg";
import img5 from "../assets/topsec5.svg";
import img6 from "../assets/topsec6.svg";
import img7 from "../assets/topsec7.svg";
import img8 from "../assets/topsec8.svg";
import img9 from "../assets/topsec9.svg";
import img10 from "../assets/topsec10.svg";
import logo from "../assets/logo-big.svg";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg ";

const TopSection = () => {
  return (
    <section className="py-5 hero-section bg-[#26262B] text-white min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4">
      {/* Left Floating Images */}
      <div className="floating left flex flex-col gap-4">
        <img src={img1} alt="Work with pics" className="w-20 md:w-24 lg:w-44" />
        <img src={img10} alt="Stay secure" className="w-12 md:w-12 lg:w-16" />
        <img src={img2} alt="Boost teamwork" className="w-20 md:w-24 lg:w-40" />
        <img src={img3} alt="Stay secure" className="w-20 md:w-24 lg:w-44" />
        <img src={img4} alt="Stay secure" className="w-20 md:w-24 lg:w-44" />
      </div>

      {/* Center Content */}
      <div className="text-center max-w-xl mx-auto">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-32 md:w-40 lg:w-40" />
        </div>
        <h1 className="text-3xl md:text-4xl md:text-5xl font-bold leading-tight">
          Dozens of apps. <br /> One subscription.
        </h1>
        <p className="text-3xl sm:text-4xl font-bold mt-2">$9.99</p>

        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <button className="px-6 py-3 bg-white text-black rounded-md font-medium">
            Try free for 7 days
          </button>
          <img src={apple} alt="Stay secure" className="w-13 hover" />
          <img src={google} alt="Stay secure" className="w-13 hover" />
        </div>

        <p className="text-gray-400 text-sm mt-4">
          Power up your workflow with Setapp, a <br />
          smart way to get apps.
        </p>
      </div>

      {/* Right Floating Images */}
      <div className="floating right flex flex-col gap-4">
        <img src={img5} alt="Work with pics" className="w-20 md:w-24 lg:w-40" />
        <img src={img6} alt="Boost teamwork" className="w-20 md:w-24 lg:w-40" />
        <img src={img7} alt="Stay secure" className="w-20 md:w-22 lg:w-40" />
        <img src={img8} alt="Stay secure" className="w-30 md:w-30 lg:w-60" />
        <img src={img9} alt="Stay secure" className="w-20 md:w-24 lg:w-40" />
      </div>
    </section>
  );
};

export default TopSection;
