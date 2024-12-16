module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-img': "url('/assets/landing-page.png')",
      },
      fontSize: {
        'landingSize': 'max(4.5vw, 22px)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
      },
      boxShadow: {
        custom: '0px 0px 10px #00000015',
      },
    },
  },
  plugins: [],
};
