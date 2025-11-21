import { useState, useEffect } from "react";

import { navLinks, socialImgs } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        {/* LOGO */}
        <a href="#hero" className="logo">
          {/* Add logo here */}
        </a>

        {/* <nav className="desktop ">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav> */}
		{/* SOCIAL ICONS */}
<div className="flex  items-center gap-4">
  {socialImgs.map((social, index) => (
    <a
      key={index}
      href={social.url ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 md:w-10 md:h-10 flex justify-center items-center rounded-xl bg-black/30 hover:bg-white/20 transition-all duration-300"
    >
      <img
        src={social.imgPath}
        alt="social icon"
        className="w-6 h-6 md:w-6 md:h-6 object-contain"
      />
    </a>
  ))}
</div>


        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
