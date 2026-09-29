import { useEffect, useState } from "react";

import { logo } from "../assets/images";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");

  // highlight the section currently in view
  useEffect(() => {
    const onScroll = () => {
      let current = "";
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-[#F3E5F5]/95 backdrop-blur-sm'>
    <header className='header'>
      <a href='#home'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </a>
      <nav className='flex text-lg gap-10 font-medium'>
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "text-pink-600" : "text-black hover:text-pink-600"}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
    </div>
  );
};

export default Navbar;
