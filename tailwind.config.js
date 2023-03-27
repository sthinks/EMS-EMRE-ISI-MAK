/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      screens: {
        '2lg': '1150px',
        '3xl': '1600px',
      },
      boxShadow: {
        ems: '0px 4px 4px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        '4xl': '50px',
        'form-error': '30px 30px 30px 0px',
      },
      textColor: {
        brand: '#004C96',
      },
    },
    fontFamily: {
      'myriad-pro': ['Myriad Pro', 'sans-serif'],
    },
  },

  plugins: [],
}
