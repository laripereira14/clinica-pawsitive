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
        'test':"url('https://i.pinimg.com/originals/e4/04/5e/e4045e650904aac0b99bbd057e802f2b.jpg')"

      })
    }
  },
  plugins: [],
}
