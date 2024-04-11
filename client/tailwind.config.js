/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui')], 
}