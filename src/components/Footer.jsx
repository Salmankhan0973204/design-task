import f1 from "../assets/fb.svg";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
import f4 from "../assets/f4.svg";
import en from "../assets/en.svg";
import p from "../assets/price-logo.svg";
import { useState } from "react";


const Footer = () => {
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState("English");
    const languages = [
    { code: "en", label: "English", flag: en },
    { code: "fr", label: "French" },
    { code: "de", label: "German" },
    { code: "es", label: "Spanish" },
  ];
  return (
    <footer className="bg-[#2B2D32] text-gray-300 py-12 px-6 md:px-16">
           <div className="border-t-1 border-gray-500 w-11/12 mx-auto py-10"></div>
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and email signup */}
 <div className="text-white px-6 py-12">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
    
    {/* Left Side: Logo + Newsletter */}
    <div className="flex flex-col flex-1">
      <div className="flex items-center mb-6">
        <div className="mr-3">
          {/* Logo */}
        <img src={p} width={20} height={32}/>
        </div>
        <span className="font-semibold text-xl">SETAPP</span>
      </div>

      <p className="mb-4 text-gray-400 text-sm">
        Updates from our team, written with love <span>🧡</span>
      </p>

      <form className="flex max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-[#404547] placeholder-gray-500 text-gray-300 rounded-l-md px-4 py-2 w-full "
        />
        <button
          type="submit"
          className="bg-white text-gray-900 px-4 py-2 rounded-r-md hover: transition cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>

    {/* Right Side: Links Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md-gap-6">
      
      <div className="space-y-2">
        <a href="#" className="block hover:underline">Home</a>
        <a href="#" className="block hover:underline">How It Works</a>
        <a href="#" className="block hover:underline">All Apps</a>
        <a href="#" className="block hover:underline">Pricing</a>
        <a href="#" className="block hover:underline">Setapp for Teams</a>
        <a href="#" className="block hover:underline">Blog</a>
        <a href="#" className="block hover:underline">Podcast</a>
        <a href="#" className="block hover:underline">Dewnload</a>
      </div>

      

      <div className="space-y-2">
          <a href="#" className="block hover:underline">About</a>
        <a href="#" className="block hover:underline">Support</a>
        <a href="#" className="block hover:underline">Education Discount</a>
        <a href="#" className="block hover:underline">Family Plan</a>
        <a href="#" className="block hover:underline">For Developers</a>
        <a href="#" className="block hover:underline">Gift Cards</a>
        <a href="#" className="block hover:underline">Redeem Card or Code</a>
        <a href="#" className="block hover:underline">Setapp Reviews</a>
        <a href="#" className="block hover:underline">Affiliate Program</a>
         <a href="#" className="block hover:underline">Mac Developer Survey 2023</a>
      </div>

     

      <div className="space-y-2">
       
        <a href="#" className="block hover:underline">Getting Started with Setapp</a>
        <a href="#" className="block hover:underline">Remote Access to Other Mac</a>
        <a href="#" className="block hover:underline">Fix macOS Ventura</a>
        <a href="#" className="block hover:underline">problems</a>
        <a href="#" className="block hover:underline">Best productivity apps</a>
        <a href="#" className="block hover:underline">Best YouTube downloaders</a>
        <a href="#" className="block hover:underline">Uninstall apps</a>
      </div>

    </div>

  </div>
</div>

 <div className="flex justify-between items-center w-full">
  {/* Left div */}
  <div className="flex space-x-2 items-center">
    <span className="bg-[#969799] px-2 py-0.5 rounded text-white font-bold text-xs">
      DMCA
    </span>
    <span className="bg-[#404547] px-2 py-0.5 rounded text-white text-xs">
      PROTECTED
    </span>
  </div>

  {/* Right div */}
  <div className="flex items-center space-x-2 text-gray-400 text-sm cursor-pointer select-none">
   {lang === "English" &&<img src={en} alt="Language" className="w-5 h-5"/>}
    <span>{lang}</span>
    <svg
       onClick={() => setOpen(!open)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-4 h-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
   {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[#1e1e22] rounded-md shadow-lg border border-gray-700 z-50">
          {languages.map((lang) => (
            <div
              key={lang.code}
                onClick={() => setOpen(false) & setLang(lang.label)} 
              className="px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
</div>

        {/* Bottom section */}
        <div className="mt-12 border-t-2 border-gray-500 pt-6 flex flex-col md:flex-row md:items-center md:justify-between text-xs text-gray-500">
        
          <div className="text-center md:text-left mb-4 md:mb-0">
            © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14,
            Ireland. Reg. 584165. VAT ID: IE3425001BH
          </div>

          <div className="flex space-x-5 justify-center md:justify-end text-gray-400">
         
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
             <img src={f1} alt="twitter" className="h-5 w-5"/>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
             <img src={f2} alt="twitter" className="h-5 w-5"/>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
           <img src={f3} alt="instagram" className="h-5 w-5"/>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <img src={f4} alt="linkedin" className="h-5 w-5"/>
            </a>
          
          </div>
       
        </div>

        <div className="mt-6 text-gray-500 text-xs flex justify-center md:justify-start">
          <a href="#" className="hover:underline mr-4">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
