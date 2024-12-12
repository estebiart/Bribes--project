/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#ed254e',
          secondary: '#011936',
          blue: '#008dd5',
          purple: '#7e5bef',
          pink: '#ff49db',
          orange: '#ff7849',
          green: '#13ce66',
          yellow: '#f2af29',
          'gray-dark': '#373f51',
          gray: '#8492a6',
          'gray-light': '#d3dce6',
          white: '#ffffff',
        },
      },
    },
  },
})
