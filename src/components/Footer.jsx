import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-cream py-4 text-black border-t border-gold">
      <div className="w-full flex flex-col items-center gap-2 sm:gap-4 px-4 sm:px-8 md:flex-row md:justify-between md:items-center">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <p className="text-center text-sm font-light whitespace-nowrap md:text-left">
            ©Élan & Ember. All rights reserved
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center my-2 md:my-0">
          <a
            href="https://cal.com/varun-dhaundiyal-6lpift/secret?user=varun-dhaundiyal-6lpift"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-black hover:text-gold transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <a
            href="#privacy-policy"
            className="text-center text-sm font-light hover:underline text-gold hover:text-black md:text-right"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
