/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
      colors: {
        "primary": "#06071D",
        "secondary": "#060720",
        "borderColor": "#242441",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(193, 193, 193) transparent",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "5px" ,
          },
          "&::-webkit-scrollbar:hover": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(193, 193, 193)",
            borderRadius: "20px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "dark", "hover"]);
    }
  ],
};
