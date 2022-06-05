module.exports = {
  content: ["./src/**/*.{js,jsx,svg}"],
  theme: {
    fontFamily: {
      sans: ['Poppins']
    },
    extend: {
      colors: {
        'primary-pink': '#f99db8',
        'secondary-pink': '#f7779c',
        'primary-green': '#60ebc1',
        'secondary-green': '#46dbac', //#64F4C8
        'black': '#3d0121',
        'white':'#fafafa'
      },
      backgroundImage: theme => ({
        'pattern': "url('./assets/pattern.svg')",
        'composition-dashboard': "url('./assets/images/composition-dashboard.png')",
      }),
      keyframes: {
        walkingpaws: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '0' },
        }
      }
    },
    animation: {
      'paw-loader': 'walkingpaws 2050ms ease-in-out infinite'
    },
  },
  plugins: [],
}
