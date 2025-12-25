import { useEffect, useState } from "react";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import s7 from "../assets/s7.svg";


const testimonials = [
  {
    id: 1,
    text:
      "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    color: "#71719A",
    social: "twitter",
    image :s5
  },
  {
    id: 2,
    text:
      "My favorites ❤️ from @Setapp: Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    name: "Mauricio Sanchez",
    handle: "@m741s",
    color: "#D9AE89",
    social: "instagram",
    image :s6
  },
  {
    id: 3,
    text:
      "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    name: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    color: "#765070",
    social: "facebook",
    image :s7
  },
  {
    id: 4,
    text:
      "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    color: "#71719A",
    social: "twitter",
    image :s5
  },
  {
    id: 5,
    text:
      "My favorites ❤️ from @Setapp: Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    name: "Mauricio Sanchez",
    handle: "@m741s",
    color: "#D9AE89",
    social: "instagram",
    image :s6
  },
  {
    id: 6,
    text:
      "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    name: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    color: "#765070",
    social: "facebook",
    image :s7
  },
];



export default function MultiCardTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Update cardsPerSlide based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerSlide(1); // Mobile
      else if (window.innerWidth < 1024) setCardsPerSlide(2); // Tablet
      else setCardsPerSlide(3); // Desktop
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const visibleTestimonials =
    currentSlide + cardsPerSlide <= testimonials.length
      ? testimonials.slice(currentSlide, currentSlide + cardsPerSlide)
      : [
          ...testimonials.slice(currentSlide),
          ...testimonials.slice(
            0,
            (currentSlide + cardsPerSlide) % testimonials.length
          ),
        ];

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Setapp in your words.
        </h2>

        <div className=" md:flex justify-between items-center gap-4">
          <p className="text-sm max-w-xs">
            What you say about how Setapp powers you up.
          </p>

          
        </div>
        <div className="flex gap-3">
           <img src={s1} alt="social" width={48} className=" cursor-pointer" />
           <img src={s2} alt="social" width={48} className=" cursor-pointer" /> 
           <img src={s3} alt="social" width={48} className=" cursor-pointer" />
           <img src={s4} alt="social" width={48} className=" cursor-pointer" />
          </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={prevSlide}
          className="w-10 h-10   text-black flex items-center justify-center cursor-pointer "
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10   text-black flex items-center justify-center cursor-pointer "
        >
          ❯
        </button>
      </div>

      {/* Cards */}
     <div className="flex gap-6 overflow-hidden">
        {visibleTestimonials.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.color }}
            className={`rounded-xl text-white transition-all duration-300 flex flex-col h-full ${
              cardsPerSlide === 1
                ? "w-full"
                : cardsPerSlide === 2
                ? "w-1/2"
                : "w-1/3"
            }`}
          >
            <p className="p-5 text-lg leading-relaxed mb-6 h-[200px]">{item.text}</p>

            <div className="flex items-center justify-between bg-[#F5F5F5] text-black rounded-lg p-4 mt-auto">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.handle}</p>
              </div>
              <div className="text-xl text-gray-700">
                <img src={item.image} alt={item.social} className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Dots */}
      <div className="flex justify-center  gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full  cursor-pointer ${
              index === currentSlide ? "bg-black" : "bg-black/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
