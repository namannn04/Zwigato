module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-img': "url('/landing-page.png')",
      },
      fontSize: {
        'landingSize': 'max(4.5vw, 22px)',
      },
    },
  },
  plugins: [],
};
