<template lang="html">
  <main>
    <Sidebar />
    <section>
      <Color
        v-for="(color, index) in filteredColors"
        :key="index"
        :color="color"
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

<style lang="scss" scoped>
@import '~/assets/css/vars.scss';

main {
  margin-top: 70px;
  padding: 20px;

  section {
    background: $color-white;
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr;
    padding: 20px;

    @media(min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 850px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
