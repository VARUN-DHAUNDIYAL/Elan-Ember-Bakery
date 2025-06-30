import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <section id="story" className="w-full bg-cream py-16 px-4 flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#8B6F4E] text-center mb-8 tracking-tight drop-shadow">Our Story</h2>
      <div className="hidden md:block w-24 h-1 rounded-full bg-gold mb-10"></div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
        <img
          src="/img/Élan & Ember.png"
          alt="Élan & Ember Bakery"
          className="w-full md:w-[480px] max-w-xl rounded-3xl shadow-2xl object-cover object-center mb-8 md:mb-0 max-h-[500px] border-4 border-gold"
        />
        <div className="w-full md:w-3/5 bg-white/80 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col justify-center">
          <p className="text-xl lg:text-2xl text-black text-center md:text-left leading-relaxed font-serif mb-0">
            At Élan & Ember, our journey is born of a quiet devotion to the art of vegetarian baking. Guided by unwavering authenticity and the highest standards of care, we craft each creation to be not just safe and pure, but a moment of delicate indulgence — where every bite lingers like a gentle memory.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FloatingImage;
