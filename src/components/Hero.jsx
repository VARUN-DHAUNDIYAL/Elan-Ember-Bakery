import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;

  const handleVideoLoad = () => setLoadedVideos((prev) => prev + 1);

  useEffect(() => {
    if (loadedVideos >= 1) setLoading(false);
  }, [loadedVideos]);

  // Auto-loop videos every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev % totalVideos) + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalVideos]);

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-cream">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden bg-cream">
        <video
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        {/* Overlay Content */}
        <div className="absolute left-0 top-0 z-40 size-full flex flex-col justify-center items-center bg-black/30">
          <div className="mt-24 px-5 sm:px-10 text-center flex flex-col items-center">
            <img src="/img/logo.png" alt="Élan & Ember logo" className="w-32 mb-4" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))' }} />
            <h1 className="font-serif text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-1" style={{ letterSpacing: '0.01em' }}>
              Élan & Ember
            </h1>
            <span className="font-serif text-black text-lg tracking-widest mb-4" style={{ letterSpacing: '0.2em' }}>
              BAKERY
            </span>
            <h2 className="special-font text-white text-2xl sm:text-4xl md:text-5xl mb-4 drop-shadow-lg">
              Pure Veg Bakery Excellence
            </h2>
            <p className="mb-5 mx-auto font-robert-regular text-white text-lg md:text-2xl drop-shadow">
              Authentic, hygienic, and delicious—cakes, pastries, brownies, croissants, patties, and more. 100% vegetarian, always fresh.
            </p>
            <Button
              id="watch-trailer"
              title="Watch our story"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-gold text-black border-gold border flex-center gap-1 hover:bg-gold-light hover:text-black mx-auto"
            />
          </div>
          {/* Dots for navigation */}
          <div className="flex gap-2 mt-8">
            {[1, 2, 3, 4].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-4 h-4 rounded-full border-2 ${currentIndex === idx ? 'bg-gold border-gold' : 'bg-white/50 border-white/80'} transition`}
                aria-label={`Go to video ${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
