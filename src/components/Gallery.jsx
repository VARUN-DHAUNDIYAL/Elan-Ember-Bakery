import React from "react";

const galleryItems = [
  {
    src: "/img/Cruffins.png",
    alt: "Signature Cruffins",
    title: "Signature Cruffins",
    desc: "Flaky, buttery, and filled with delicious cream—our cruffins are a customer favorite and a must-try!"
  },
  {
    src: "/img/Chocolate_Croissants.png",
    alt: "Chocolate Croissants",
    title: "Chocolate Croissants",
    desc: "Our chocolate croissants are crisp, flaky, and filled with rich chocolate—an irresistible bakery favorite."
  },
  {
    src: "/img/Seasonal Fruit Galettes.png",
    alt: "Seasonal Fruit Galettes",
    title: "Seasonal Fruit Galettes",
    desc: "Rustic, golden pastry filled with the freshest seasonal fruits—our galettes are a celebration of nature's sweetness."
  },
  {
    src: "/img/Mini Mediterranean Puff Pastry Rolls.png",
    alt: "Mini Mediterranean Puff Pastry Rolls",
    title: "Mini Mediterranean Puff Pastry Rolls",
    desc: "Flaky, bite-sized rolls filled with Mediterranean-inspired veggies and herbs—a savory treat perfect for any occasion."
  },
  {
    src: "/img/Pesto & Grilled Veggie Brioche Bun.png",
    alt: "Pesto & Grilled Veggie Brioche Bun",
    title: "Pesto & Grilled Veggie Brioche Bun",
    desc: "Soft, buttery brioche buns filled with vibrant pesto and grilled veggies—a gourmet vegetarian delight."
  },
  {
    src: "/img/Green Pea & Mint Vol-au-Vent.png",
    alt: "Green Pea & Mint Vol-au-Vent",
    title: "Green Pea & Mint Vol-au-Vent",
    desc: "Delicate puff pastry cases filled with a vibrant green pea and mint mousse—light, fresh, and perfect for spring."
  },
];

const Gallery = () => (
  <section className="bg-cream pt-2 pb-8 mt-8 md:mt-24">
    <div className="w-full px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-zentry text-gold text-center mb-8 sm:mb-10">Bakery Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col items-center p-4" id={idx === 0 ? 'gallery-cruffins' : undefined}>
            <img src={item.src} alt={item.alt} className="w-full h-48 sm:h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
            <p className="text-black text-center opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery; 