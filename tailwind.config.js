/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{html,js,svelte,ts}"],
  corePlugins: { container: false },
  theme: {
    fontFamily: {
      body: ["Hind", "sans-serif"],
      headers: ["Montserrat", "sans-serif"],
    },
  },
  daisyui: {
    base: false,
    themes: [
      {
        mytheme: {
          primary: "#151414",

          secondary: "#ddd",

          accent: "#ff4500",

          neutral: "#1e1e1e",

          "base-100": "#111",

          info: "#1e1e1e",

          success: "#36d399",

          warning: "#4b1113",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
