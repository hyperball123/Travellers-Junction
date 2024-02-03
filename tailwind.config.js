/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
     fontFamily: {
      sans: 'Roboto Mono,monospace',
    },
    
   screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: {
      'gradient-image': 'linear-gradient(rgba(34, 34, 34, 0.5), rgba(34, 34, 34, 0.6)), url("assets/vidar-nordli-mathisen-loTTPqOed7c-unsplash.jpg")',
      },
     fontFamily: {
        protest: ['Protest Riot', 'sans-serif'],
      },  
    },

    height: {
        screen: '100dvh',
    },

  },
  plugins: [],
};
// C:\Users\SUFIYAN\Desktop\React\travellers-junction\src\assets\travellers-junction-high-resolution-logo-transparent.png