<template>
  <div class="head-container">
    <Head />
  </div>
  <div class="digital-wrap">
    <div class="label">处理地块数:</div>
    <Digital :number='888'/>
  </div>

  <chain-ratio></chain-ratio>

  <div class="map-container">
    <Map />
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Map from "./components/map/Map";
import Digital from "./components/Digital"; // 数字滚动插件
import chainration from "./components/ChainRatio"; //环比插件
import ChainRatio from './components/ChainRatio.vue';

export default {
  name: "App",
  components: {
    Head,
    Map,
    Digital,
    chainration,
    ChainRatio
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

.map-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
}

/**数字提示符 */
.digital-wrap{
  left: 50%;
  display: inline-block;
  position: absolute;
  transform: translateX(-50%);

  .label{
    font-size: 25px;
    margin-right: 10px;
    top: -10px;
    position: relative;
    color:#0f2a42;
    font-weight: 600;
  }

  & > div{
    display: inline-block;
  }
}
</style>
