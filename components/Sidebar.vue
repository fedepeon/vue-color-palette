<template lang="html">
  <aside>
    <h3>Search color by name</h3>
    <input type="search" placeholder="Caribbean blue...">

    <h3>Filter by dominant color</h3>
    <ul>
      <li>Blue</li>
      <li>Red</li>
      <li>Green</li>
      <li>Yellow</li>
      <li>Gray</li>
    </ul>

    <h3>Switch color code display</h3>
    <form>
      <label for="code-hex">Hex</label>
      <input @input="switchColorMode" type="radio" name="color-code" id="code-hex" value="hex" checked="checked">

      <label for="code-rgb">RGB</label>
      <input @input="switchColorMode" type="radio" name="color-code" id="code-rgb" value="rgb">
    </form>

  </aside>
</template>

<script type="text/javascript">
  export default {
    methods: {
      switchColorMode(event) {
        const newColorMode = event.target.value
        this.$store.commit('switchColorMode', newColorMode)
      }
    }
  }
</script>
