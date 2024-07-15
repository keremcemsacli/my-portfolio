/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  plugins: [
    // Özel sınıflarınızı tanımlamak için bir plugin ekleyin
    function ({ addUtilities }) {
      const newUtilities = {
        // Daha fazla özel sınıf ekleyebilirsiniz
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
