/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "rgb(250 248 244)",
          100: "rgb(245 241 234)",
          200: "rgb(232 224 210)",
          300: "rgb(216 203 181)",
          400: "rgb(200 185 166)", // ロゴのゴールド寄り
          500: "rgb(170 153 132)",
          600: "rgb(140 124 106)",
        },
      },
    },
  },
  plugins: [],
};