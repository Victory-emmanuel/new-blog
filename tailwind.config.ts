/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#3a3a3a",
        accent: "#ef0909",
        lightAccent: "#ef09096b",
        extraClr: "#eeee",
        green: "#8DBDA5",
        grey: "#E1E1E1",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
    },
    screens: {
      xs: "400px",
      ss: "600px",
      sm: "800px",
      md: "1000px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
