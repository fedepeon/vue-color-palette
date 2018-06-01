<template lang="html">
  <main>
    <Sidebar />
    <section>
      <Color
        v-for="(color, index) in filteredColors"
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
  computed: {
    filteredColors() {
      return this.$store.state.colors.filter(color => {
        return color.name.toLowerCase().includes(this.$store.state.search.toLowerCase())
      })
    }
  }
}
</script>
