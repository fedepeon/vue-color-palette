<template lang="html">
  <div class="color-card">
    <h2>{{ color.name }}</h2>
    <span class="color-code">
      {{ $store.state.colorMode == 'hex' ? color.hex : color.rgb }}
    </span>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['color']
}
</script>
