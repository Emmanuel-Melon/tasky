/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}", "./src/**/**/*.{html,js,svelte,ts}"],
    daisyui: {
      themes: ["emerald"],
    },
    plugins: [require("daisyui"), require("@tailwindcss/typography")],
  };
  