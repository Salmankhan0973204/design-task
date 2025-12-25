import { useState } from "react";
import Testimonial from "../assets/Testimonial.svg";
import dummy from "../assets/dummy.webp";
import playBtn from "../assets/playBtn.svg";

const slides = [
  {
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    name: "Jason Staczek",
    image: Testimonial,
  },
  {
    text: "Artists like Maria find Setapp perfect for managing projects and staying creative.",
    name: "Maria Lopez",
    image: dummy,
  },
  {
    text: "Writers like David love how Setapp helps them organize ideas efficiently.",
    name: "David Nguyen",
    image: Testimonial,
  },
  {
    text: "Designers like Anna rely on Setapp to handle repetitive tasks quickly.",
    name: "Anna Smith",
    image: dummy,
  },
];

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-b from-[#26262B] from-50% to-white-500 to-50% p-10">
      <div className=" g-gradient-to-b from-red-500 from-50% to-green-500 to-50% relative mx-auto max-w-8xl">
        {/* Testimonial container */}
        <div className="rounded-2xl bg-[#7a5573] overflow-hidden h-[735px] relative">

          {/* Arrows */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              className="w-10 h-10 text-white flex items-center justify-center cursor-pointer"
              onClick={prevSlide}
            >
              ❮
            </button> 
            <button
              className="w-10 h-10 text-white flex items-center justify-center cursor-pointer"
              onClick={nextSlide}
            >
              ❯
            </button>
          </div>

          {/* Main Content */}
          <div className="grid h-full grid-cols-1 md:grid-cols-2 items-center">
            {/* Left */}
            <div className=" p-5 md:p-15 text-white space-y-15">
              <div>
              <p className="md-text-xl leading-relaxed max-w-md">
                {slides[currentSlide].text}
              </p>
              <span className="block text-sm my-10 opacity-80">
                {slides[currentSlide].name}
              </span>
              </div>
              <div className="md:mt-30">  <img
                src={playBtn}
                alt="Play Button"
                className="w-16 h-16   cursor-pointer"
              /></div>
            
            </div>

            {/* Right */}
            <div className="h-full flex items-center justify-end">
              <img
                src={slides[currentSlide].image}
                alt="Testimonial"
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute top-[760px] left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
