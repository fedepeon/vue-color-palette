import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      colorMode: 'hex',
      nav: [
        {
          content: 'Home',
          href: '/'
        },
        {
          content: 'Palette',
          href: '/palette'
        },
        {
          content: 'About',
          href: '/about'
        }
      ],
      colors: [
        {
          name: 'Cobalt blue',
          code: {
            hex: '#0047AB',
            rgb: 'rgb(0, 71, 171)'
          },
          dominant: 'blue'
        },
        {
          name: 'Caribbean blue',
          code: {
            hex: '#1AC1DD',
            rgb: 'rgb(26, 193, 221)'
          },
          dominant: 'blue'
        },
        {
          name: 'Dark spring green',
          code: {
            hex: '#177245',
            rgb: 'rgb(23, 114, 69)'
          },
          dominant: 'green'
        },
        {
          name: 'Flame',
          code: {
            hex: '#E25822',
            rgb: 'rgb(226, 88, 34)'
          },
          dominant: 'red'
        },
        {
          name: 'Electric yellow',
          code: {
            hex: '#FFFF33',
            rgb: 'rgb(255, 255, 51)'
          },
          dominant: 'yellow'
        },
        {
          name: 'Ultramarine blue',
          code: {
            hex: '#3780ff',
            rgb: 'rgb(55, 128, 255)'
          },
          dominant: 'blue'
        },
        {
          name: 'Dark lemon lime',
          code: {
            hex: '#8BBE1B',
            rgb: 'rgb(139, 190, 27)'
          },
          dominant: 'green'
        }
      ]
    },
    mutations: {
      switchColorMode (state, newColorMode) {
        state.colorMode = newColorMode
      }
    }
  })
}

export default createStore
