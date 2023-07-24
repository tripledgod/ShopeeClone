/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-var-requires */
// const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // corePlugins: {
  //   container: false
  // },
  theme: {
    extend: {
      colors: { orange: '#ee4d2d' }

      // backgroundImage: {
      //   shopee: "url('https://down-vn.img.susercontent.com/file/sg-11134004-7qvcy-lfuqe4hftedq21')"
      // },
      // backgroundSize: {
      //   contain: 'contain'
      // }
    }
  },
  // get theme() {
  //   return this._theme
  // },
  // set theme(value) {
  //   this._theme = value
  // },
  plugins: [
    // plugin (function ({addComponents}){
    //   addComponents ({
    //     '.container ':{
    //       maxWith : theme('columns.7xl'),
    //       marginLeft: 'auto',
    //       marginRight : 'auto',
    //       paddingLeft : 'auto',
    //       paddingRight : 'auto'
    //     }
    //   })
    // }
    // ),
    require('@tailwindcss/line-clamp')
  ]
}
