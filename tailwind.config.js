/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      primary: "#1f2641",
      secondary: "#2e3267",
      tertiary: "#424890",
      quaternary: "#6c63ff",
      white: "#ffffff",
      danger: "#f75842",
      darkviolet: "#7209F8",
      fuchsia: "#951DBF",
      violet: "#4E3485",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
