import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "", id }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      id={id}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title font-zentry text-white">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-white">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-gold px-5 py-2 text-xs uppercase text-black"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section id="features" className="bg-cream pt-8 pb-0 md:pb-24">
    <div className="w-full px-2 sm:px-8 md:px-10">
      {/* No spacer or heading here, go straight to the features content */}
      <BentoTilt id="feature-1" className="border-hsla relative mb-7 h-72 sm:h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              C<b>a</b>kes
            </>
          }
          description="Moist, flavorful, and beautifully decorated cakes for every occasion. 100% pure veg."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-4 md:gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                P<b>a</b>stries
              </>
            }
            description="Light, creamy, and irresistible pastries—crafted with care and hygiene."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 md:col-span-1">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                A<b>l</b>oo Puffs
              </>
            }
            description="Crispy, golden pastry filled with spiced potato—our Aloo Puffs are a savory classic loved by all."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 md:col-span-1">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                M<b>a</b>carons
              </>
            }
            description="Delicate, colorful, and filled with luscious cream—our macarons are a French-inspired treat."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 h-auto md:h-96 w-full md:h-[65vh]">
          <BentoCard
            src="videos/feature-5.mp4"
            title={
              <>
                C<b>r</b>oissants
              </>
            }
            description="Flaky, buttery croissants—soon to be your new favorite!"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt id="feature-6" className="border-hsla relative h-auto md:h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/brownie.mp4"
            title={
              <>
                B<b>r</b>ownies
              </>
            }
            description="Fudgy, rich, and pure veg—our brownies are a chocolate lover's dream, baked to perfection."
            isComingSoon
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
