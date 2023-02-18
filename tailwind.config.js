module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        lightLightGray: '#F5F5F7',
        cream: '#FFE9E3',
        lightBrown: '#AE7261',
        darkBrown: '#714000',
        lightBlue: '#00A5FF',
        darkBlue: '#0000CB',
        lightGray: '#AFA8BA',
        mainGray: '#7B7485',
        darkGray: '#4A4453',
        black: '#1E1A33',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
