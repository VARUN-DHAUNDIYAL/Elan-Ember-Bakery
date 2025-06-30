/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
        cream: {
          DEFAULT: '#F6F1EB',
          light: '#FAF7F2',
        },
        black: {
          DEFAULT: '#181818',
        },
        gold: {
          DEFAULT: '#C89D5E',
          light: '#E3C9A8',
        },
        tan: {
          DEFAULT: '#E3C9A8',
        },
        white: '#FFFFFF',
        red: {
          DEFAULT: '#D7263D',
        },
      },
    },
  },
  plugins: [],
};
