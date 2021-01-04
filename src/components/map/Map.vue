<template>
  <div class="base-map">
    <div class="mapbox-container">
      <Mapbox ref="mapbx" />
    </div>

    <div class="styles-container">
      <Styles />
    </div>
  </div>
</template>

<script>
import Mapbox from "./Mapbox";
import Styles from "./Styles";

export default {
  components: {
    Mapbox,
    Styles,
  }
};
</script>

<style lang="scss" scoped>
.base-map {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;

  .mapbox-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }

  .styles-container {
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 2;
  }
}
</style>