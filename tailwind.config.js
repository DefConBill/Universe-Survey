/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#2b664c',
        'light-green': '#95f3be',
        'medium-green': '#48a163',
        'white': '#ffffff',
        'primary': '#5c848e',
        'secondary': '#d98545',
      },
    },
  },
  plugins: [],
}

