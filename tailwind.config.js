module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "green-dim": "0 0px 20px rgba(81,243,156,0.4)",
        green: "0 0px 20px rgba(81,243,156,0.9)",
        blue: "0 0px 20px rgba(139,234,255)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        osiris: ["Osiris", "sans-serif"],
      },
      colors: {
        "color-text": "#E8E8E8",
        secondary: "#2A292B",
        "psyfi-blue": "#1a1f2e",
        "psyfi-red": "#BD363A",
        "psyfi-green": "#51F39C",
        "psyfi-orange": "#FAC265",
        "psyfi-teal": "#8BEAFF",
      },
    },
  },
  plugins: [],
}
