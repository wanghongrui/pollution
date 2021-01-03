<template>
  <div class="head-container">
    <Head />
  </div>

  <div class="map-container">
    <Map />
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Map from "./components/map/Map";

export default {
  name: "App",
  components: {
    Head,
    Map,
  },
};
</script>

<style>
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
</style>
