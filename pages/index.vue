<template lang="html">
  <main>
    <Sidebar />
      <transition-group name="fade" tag="section">
        <Color
          v-for="(color, index) in filteredColors"
          :key="index"
          :color="color"
        />
      </transition-group>
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

    .fade-enter-active, .fade-leave-active {
      transition: opacity .2s, transform 0.4s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
      transform: scale(0.8);
    }

    @media(min-width: 500px) {
      grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media(min-width: 1100px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
</style>
