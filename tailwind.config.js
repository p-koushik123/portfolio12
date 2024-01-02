/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#146b79",
        lightText: "#00ffff",
        boxBg: " linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)",
        designColor: "#00eeee",
      },
      boxShadow: {
        shadowOne: "2px 2px  2px",
      },
    },
  },
  plugins: [],
};
