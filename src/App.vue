<template>
  <div class="head-container">
    <Head />
  </div>
  <div class="digital-wrap">
    <div class="label">处理地块数:</div>
    <Digital :number="888" />
  </div>

  <chain-ratio></chain-ratio>

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
import chainration from "./components/ChainRatio"; //环比插件
import ChainRatio from "./components/ChainRatio.vue";
import Right from "./components/Right";

export default {
  name: "App",
  components: {
    Head,
    Map,
    Digital,
    chainration,
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

.map-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
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
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: rgb(34, 34, 34);
}
</style>
