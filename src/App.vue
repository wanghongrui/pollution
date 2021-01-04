<template>
  <div class="head-container">
    <Head />
  </div>
  <!--环比组件-->
  <div class="left-container">
    <ChainRatio />
  </div>

  <div class="map-container">
    <Map />
  </div>

  <div class="right-container" v-if="item">
    <Right />
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Map from "./components/Map";
import Digital from "./components/Digital"; // 数字滚动插件
import ChainRatio from "./components/ChainRatio.vue"; //环比插件
import Right from "./components/Right";

export default {
  name: "App",
  components: {
    Head,
    Map,
    Digital,
    ChainRatio,
    Right,
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}
:root {
  background: #0f2a42;
  color: #2c3e50;
  font-size: 16px;
  z-index: 1;
}

#app {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
}

.head-container {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
}

.map-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 0;
}

/**数字提示符 */
.digital-wrap {
  left: 50%;
  display: inline-block;
  position: absolute;
  transform: translateX(-50%);

  .label {
    font-size: 25px;
    margin-right: 10px;
    top: -10px;
    position: relative;
    color: #0f2a42;
    font-weight: 600;
  }

  & > div {
    display: inline-block;
  }
}

.right-container {
  position: absolute;
  right: 0;
  top: 50px;
  bottom: 0;
  width: 300px;
  background: rgba(0, 0, 0, 0.5);
}

.left-container {
  position: absolute;
  left: 0;
  top: 50px;
  width: 300px;
  background: rgba(0, 0, 0, 0.5);
}
</style>
