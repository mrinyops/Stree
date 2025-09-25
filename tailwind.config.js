/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')], // ✅ NativeWind preset
  theme: {
    extend: {
      colors: {
        streeBlue: '#2563eb',
      },
    },
  },
  plugins: [],
};
