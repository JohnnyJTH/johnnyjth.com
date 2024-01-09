/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      backgroundColor: {
        "bl-primary": "#94f7a3",
        "bl-primary-hover": "#adffb9"
      },
      textColor: {
        "bl-primary": "#6ef582",
      },
      borderColor: {
        "bl-primary": "#6ef582",
      },
      gradientColorStops: {
        "bl-primary": "#e3ffe7",
        "bl-secondary": "#d9e7ff",
      },
      spacing: {
        "half-base": "calc(50% - 4rem)",
        "half-small": "calc(50% - 18rem)",
        "half-large": "calc(50% - 30rem)",
      }
    },
  },

  plugins: [],
};

module.exports = config;
