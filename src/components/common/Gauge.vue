<template>
  <div class="chart gauge">
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const canvas = this.$refs["canvas"];

      const option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "治理指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 72, name: "完成率" }],
          },
        ],
      };
      console.log(this.$echarts);
      this.$echarts.init(canvas).setOption(option, true);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart {
  position: relative;
  width: 100%;
  height: 100%;

  .canvas {
    width: 100%;
    height: 100%;
    min-height: 320px;
  }
}
</style>