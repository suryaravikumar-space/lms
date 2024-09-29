module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update paths as needed
    "./public/index.html", // Ensure your HTML is scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Add DaisyUI as a plugin
  ],
}
