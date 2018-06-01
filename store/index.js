import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      colorMode: 'hex',
      search: '',
      filteredColors: [],
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
          hex: '#0047AB',
          rgb: 'rgb(0, 71, 171)',
          dominant: 'blue'
        },
        {
          name: 'Caribbean blue',
          hex: '#1AC1DD',
          rgb: 'rgb(26, 193, 221)',
          dominant: 'blue'
        },
        {
          name: 'Dark spring green',
          hex: '#177245',
          rgb: 'rgb(23, 114, 69)',
          dominant: 'green'
        },
        {
          name: 'Flame',
          hex: '#E25822',
          rgb: 'rgb(226, 88, 34)',
          dominant: 'red'
        },
        {
          name: 'Electric yellow',
          hex: '#FFFF33',
          rgb: 'rgb(255, 255, 51)',
          dominant: 'yellow'
        },
        {
          name: 'Ultramarine blue',
          hex: '#3780ff',
          rgb: 'rgb(55, 128, 255)',
          dominant: 'blue'
        },
        {
          name: 'Dark lemon lime',
          hex: '#8BBE1B',
          rgb: 'rgb(139, 190, 27)',
          dominant: 'green'
        }
      ]
    },
    mutations: {
      updateColorMode (state, newColorMode) {
        state.colorMode = newColorMode
      },
      updateSearch (state, newSearch) {
        state.search = newSearch
      }
    }
  })
}

export default createStore
