<template lang="html">
  <header>
    <h1>Colette</h1>
    <nav>
      <ul>
        <li v-for="(link, index) in $store.state.nav" :key='index'>
          <nuxt-link :to='link.href'>{{ link.content }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script type="text/javascript">
export default {
}
</script>
