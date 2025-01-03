/**@type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      heroBackground: {
        "custom-gradient": "linear-gradient(90.7deg, #211C24 0.64%, #211C24 101%)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
      },
      noPadding: {
        padding: "0", // Custom container without padding
    },
      width: {
        DEFAULT: "100%",
        desktop: "1120px",
      },
      minWidth: {
        DEFAULT: "375px",
      },
    },
    screens: {
      desktop: "1152px",
    },
  },
  plugins: [],
};
