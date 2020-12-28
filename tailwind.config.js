module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
      },
      borderRadius:{
        'profile': '6rem',
        'card-tl': '4rem'
      },
      backgroundImage: theme => ({
        'profile-pattern': "url('/public/img/profile-removebg-preview.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
