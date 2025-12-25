import { useState } from "react";
import logo from "../assets/logo.svg";
import line from "../assets/line.svg";
import en from "../assets/en.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  const menuItems = [
    { label: "How it works", id: "home" },
    { label: "All apps", id: "showcase" },
    { label: "Pricing", id: "pricing" },
    { label: "Blog", id: "reviews" },
    { label: "Podcast", id: "testimonial" },
  ];

  const menuItemClass = "cursor-pointer hover:text-gray-300";

  return (
    <nav className="w-full px-6 py-4 bg-[#1f2023] text-white fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          width={110}
          height={32}
          className="cursor-pointer"
          onClick={() => scrollToSection("home")}
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={menuItemClass}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}

            <li>
              <img src={line} alt="divider" className="h-6 opacity-60" />
            </li>

            <li className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <img src={en} alt="EN" className="w-5 h-5" />
              <span className="text-sm">EN</span>
            </li>
          </ul>

          <button className="text-sm text-gray-300 hover:text-white cursor-pointer">
            Sign in
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
            Try free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl lg:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mt-4 bg-[#2a2b2f] rounded-lg p-5">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={menuItemClass}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}

            <li className="flex items-center gap-3 pt-4 border-t border-gray-700">
              <img src={en} alt="EN" className="w-5 h-5" />
              <span>English</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
