module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Not official colors, auto generated
          50: "#e7f6fd",
          100: "#cfeefa",
          200: "#9fddf5",
          // Official colors from the video
          400: "#3fbaeb",
          500: "#0fa9e6",
          600: "#0c87b8",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
