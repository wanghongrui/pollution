<template>
  <div class="info-container" v-if="item">
    <Info :item="item" />
  </div>

  <div class="gauge-container">
    <Gauge />
  </div>
</template>

<script>
import Info from '@/components/common/Info'
import Gauge from '@/components/common/Gauge'

export default {
  components: {
    Info, Gauge
  },
  computed: {
    item () {
      return this.$store.state.item
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>