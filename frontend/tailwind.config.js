/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'grid-pattern': "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2210%22 height=%2210%22><rect width=%2210%22 height=%2210%22 fill=%22white%22 /><path d=%22M0 0H10V10%22 fill=%22none%22 stroke=%22lightgray%22 stroke-width=%220.5%22/></svg>')"
        }
      },
    },
    plugins: [],
  }
  