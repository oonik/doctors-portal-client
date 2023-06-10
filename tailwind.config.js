/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#2a323c",
          "base-100": "#1d232a",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

