<template>
  <div class="head">
    <div class="head-text">污染源大屏展示</div>

    <span class="head-date" v-if="dateText"><span class="date-hot">{{dateText}}</span></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dateText: null
    }
  },
  mounted () {
    setInterval(this.getDate, 1000)
  },
  methods: {
    getDate() {
      const date = new Date()
      this.dateText = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: white;
  height: 50px;

  &-text {
    font-size: 1.5rem;
    flex: 1;
  }

  &-date {
    color: #ccc;
  }
}
</style>