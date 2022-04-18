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
        'primary-green': '#60ebc1', //#64F4C8
        'black': '#3d0121',
        'white':'#fafafa'
      },
      backgroundImage: theme => ({
        'pattern': "url('./assets/pattern.svg')"

      })
    }
  },
  plugins: [],
}
