/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF", // couleur bleue principale
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#424245",
        },
        transparentGray: "rgba(66, 66, 69, 0.44)", // gris semi-transparent
        zinc: "#101010", // couleur zinc foncée
      },
      borderRadius: {
        '4xl': '2rem', // pour avoir un arrondi plus gros si besoin
      },
    },
  },
  plugins: [],
};
