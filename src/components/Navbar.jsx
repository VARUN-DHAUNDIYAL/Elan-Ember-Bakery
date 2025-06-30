import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = ["About", "Our Offerings", "Unique Offerings", "Our Story", "Contact"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Autoplay audio on first user interaction
  useEffect(() => {
    const playAudioOnInteraction = () => {
      setIsAudioPlaying(true);
      setIsIndicatorActive(true);
      if (audioElementRef.current) {
        audioElementRef.current.play();
      }
      window.removeEventListener('click', playAudioOnInteraction);
    };
    window.addEventListener('click', playAudioOnInteraction);
    return () => window.removeEventListener('click', playAudioOnInteraction);
  }, []);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-2 z-50 h-10 border-none transition-all duration-700 sm:inset-x-2"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between px-2 py-1 bg-white/20 backdrop-blur-lg text-black rounded-lg min-h-[40px]">
          {/* Logo and Product button */}
          <div className="flex items-center gap-3 sm:gap-7">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src="/img/logo.png" alt="Élan & Ember logo" className="w-16 sm:w-20 cursor-pointer" />
            </a>
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-gold text-black border-gold border hidden md:flex items-center justify-center gap-1 hover:bg-gold-light hover:text-black"
              onClick={() => {
                const featuresSection = document.getElementById('features');
                if (featuresSection) featuresSection.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center gap-2 sm:gap-4">
            {/* Hamburger icon for mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Open navigation menu"
            >
              <span className="block w-6 h-0.5 bg-black mb-1 rounded"></span>
              <span className="block w-6 h-0.5 bg-black mb-1 rounded"></span>
              <span className="block w-6 h-0.5 bg-black rounded"></span>
            </button>
            {/* Desktop nav links */}
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={index === 0 ? "#about" : index === 1 ? "#feature-cakes" : index === 2 ? "#gallery-cruffins" : index === 3 ? "#story" : `#${item.toLowerCase()}`}
                  className="nav-hover-btn text-black hover:text-gold text-sm sm:text-base px-2"
                >
                  {item}
                </a>
              ))}
            </div>
            {/* Mobile nav menu overlay */}
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-50 md:hidden">
                {/* Backdrop that closes the menu on click */}
                <div className="absolute inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
                {/* The actual menu, stops propagation so clicks inside don't close it */}
                <div className="relative bg-cream rounded-bl-xl shadow-lg mt-2 mr-2 p-6 flex flex-col gap-4 w-3/4 max-w-xs float-right z-10 ml-auto" onClick={e => e.stopPropagation()}>
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={index === 0 ? "#about" : index === 1 ? "#feature-cakes" : index === 2 ? "#gallery-cruffins" : index === 3 ? "#story" : `#${item.toLowerCase()}`}
                      className="text-black text-lg font-semibold py-2 px-2 rounded hover:bg-gold/30"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
            <img src="/img/veg-logo.webp" alt="Pure Veg Logo" className="w-6 h-6 sm:w-8 sm:h-8 ml-2 sm:ml-4" />
            <button
              onClick={toggleAudioIndicator}
              className="ml-4 sm:ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/Meteorites.wav"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
