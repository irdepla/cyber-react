/**@type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px"
      },
      width: {
        DEFAULT: "100%",
        desktop: "1120px"
      },
      minWidth: {
        DEFAULT: "375px",
      }
    },
    screens: {
      desktop: "1152px",
    },
  },
  plugins: [],
};
