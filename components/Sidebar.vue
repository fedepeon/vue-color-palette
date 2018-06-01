<template lang="html">
  <aside>
    <h3>Search color by name</h3>
    <input v-model="search" type="search" placeholder="Caribbean blue...">

    <!-- <h3>Filter by dominant color</h3>
      <div v-for="(dominantColor, index) in $store.state.dominantColors" :key="index">
        <label :for="dominantColor.toLowerCase()">{{ dominantColor }}</label>
        <input
          @input="filterByDominantColors"
          v-model="selectedDominantColors"
          :id="dominantColor.toLowerCase()"
          type="checkbox"
          name="dominant-color"
          :value="dominantColor.toLowerCase()"
        >
      </div> -->

    <h3>Switch color code display</h3>
    <form>
      <label for="code-hex">Hex</label>
      <input v-model="colorMode" type="radio" name="color-code" id="code-hex" value="hex" checked="checked">

      <label for="code-rgb">RGB</label>
      <input v-model="colorMode" type="radio" name="color-code" id="code-rgb" value="rgb">
    </form>

    <button @click="resetFilters" type="button" name="button">Reset filters</button>
  </aside>
</template>

<script type="text/javascript">
  export default {
    computed: {
      colorMode: {
        get() {
          return this.$store.state.colorMode
        },
        set(newColorMode) {
          this.$store.commit('updateColorMode', newColorMode)
        }
      },
      search: {
        get() {
          return this.$store.state.search
        },
        set(newSearch) {
          this.$store.commit('updateSearch', newSearch)
        }
      }
    },
    methods: {
      resetFilters() {
        this.$store.commit('updateColorMode', 'hex')
        this.search = ''
      }
    }
  }
</script>
