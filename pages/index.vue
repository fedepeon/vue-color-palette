<template lang="html">
  <main>
    <Sidebar />
    <section>
      <Color
        v-for="(color, index) in colors"
        :key="index"
        :color="color"
        :style="`background-color: ${color.code.hex}`"
      />
    </section>
  </main>
</template>

<script type="text/javascript">
import Color from '~/components/Color.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Color,
    Sidebar
  },
  data () {
    return {
      colors: this.$store.state.colors
    }
  }
}
</script>
