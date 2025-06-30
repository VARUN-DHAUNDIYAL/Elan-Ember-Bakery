import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-cream flex items-center justify-center py-24">
      <div className="w-full flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8 min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 w-full md:w-7/12 h-64 sm:h-96 md:h-[70vh] flex justify-center items-center mb-6 md:mb-0"
        >
          <img
            src="img/about.png"
            alt="Élan & Ember Bakery magical illustration"
            className="rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-full h-full object-cover mx-auto"
            style={{ objectPosition: 'center' }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-5/12 flex flex-col justify-center"
        >
          <p className="text-gold uppercase tracking-widest mb-2 text-sm text-center md:text-left">Welcome to Élan & Ember</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-4 text-center md:text-left">Artisan Joy, Timeless Taste</h2>
          <div className="text-black text-lg leading-relaxed space-y-4 text-center md:text-left">
            <p><b>Owned by Dhaundiyal's Philosophy</b></p>
            <p>At Élan & Ember, every creation is a celebration of craft and care. Guided by the belief that baking is both an art and a promise, we bring to life pastries and breads that blend timeless techniques with modern elegance.</p>
            <p>We cherish the harmony of tradition and innovation, using only the finest, responsibly sourced ingredients. Each cake, croissant, brownie, and patty is shaped with precision and passion — from the gentle lamination of dough to the delicate final glaze.</p>
            <p className="text-gold">
              Join us in celebrating authentic flavors, family values, and the joy of sharing fresh bakes with your loved ones.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
