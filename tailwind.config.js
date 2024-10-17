module.exports = {
  content: ["./src/**/*.{html,js}", 
     'node_modules/preline/dist/*.js',
    "./src/Components/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
    require('preline/plugin'),
  ],
}

