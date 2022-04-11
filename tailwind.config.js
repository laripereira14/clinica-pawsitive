module.exports = {
  content: ["./src/**/*.{js,jsx,svg}",],
  theme: {
    fontFamily: {
      sans: ['Poppins']
    },
    extend: {
      colors: {
        'primary-pink': '#f99db8',
        'secondary-pink': '#f7779c',
        'primary-green': '#44ffc9',
        'black': '#3d0121',
        'white':'#fafafa'
      },
      backgroundImage: theme => ({
        'pattern': "url('./assets/pattern2.svg')",
      })
    }
  },
  plugins: [],
}
