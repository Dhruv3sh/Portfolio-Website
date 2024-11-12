const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    './index.html',    
    './src/**/*.{html,js,jsx,ts,tsx}', 
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Make sure the paths are correct
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    darkMode: "class",
  plugins: [nextui()],
  },
  plugins: [],
};