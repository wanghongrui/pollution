<template>
  <div class="chart gauge">
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  mounted() {
    this.value = (Math.random() * 80 + 20).toFixed(2);
    this.init();
  },
  methods: {
    init() {
      const canvas = this.$refs["canvas"];

      const option = {
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "39%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "inner",
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            animation: false,
            data: [
              {
                value: 100,
                name: this.value + "%",
                itemStyle: {
                  normal: {
                    color: "#6a5acd",
                  },
                },
                label: {
                  normal: {
                    show: true,
                    position: "center",
                    textStyle: {
                      color: "#f8f8f8",
                      fontSize: 20,
                    },
                  },
                },
              },
            ],
          },
          {
            type: "pie",
            radius: ["40%", "43%"],
            itemStyle: {
              normal: {
                color: "#6a5acd",
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            hoverAnimation: false,
            animationEasing: "cubicOut",
            data: [
              {
                value: this.value,
                itemStyle: {
                  emphasis: {
                    color: "#6a5acd",
                  },
                },
              },
              {
                value: 100 - this.value,
                itemStyle: {
                  normal: {
                    color: "#d3d3d3",
                  },
                },
              },
            ],
          },
        ],
      };

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
  }
}
</style>