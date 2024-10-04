/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./ana/**/*.{html,js}"],
  theme: {
    container: { // Corrected from 'container{' to 'container: {'
      center: true, // Added a comma here
      screens: { // Corrected from 'screen{' to 'screens: {'
        lg: '1148px',
        xl: '1148px',
        '2xl': '1148px'
      } // Closing brace for screens
    }, // Closing brace for container
    extend: {
      fontFamily: {
        playwrite: ["Playwrite DE Grund", 'cursive'],
        edu: ["Edu AU VIC WA NT Guides", 'cursive']
      }
    } // Closing brace for extend
  },
  plugins: [] // Added a comma here
};
