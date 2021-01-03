<template>
  <div class="mapbox" id="mapbox"></div>
</template>

<script>
import Vue, { watch } from "vue";

export default {
  created() {
    this.load().then(() => {
      this.init();
    });
  },
  computed: {
    styledata() {
      return this.$store.state.styledata;
    },
  },
  watch: {
    styledata() {
      const styledata = JSON.parse(JSON.stringify(this.styledata));
      map.setStyle(styledata, { diff: false });
    },
  },
  methods: {
    load() {
      return new Promise((resolve, reject) => {
        if (window.mapboxgl) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.setAttribute("src", "./lib/mapbox-gl.js");
        document.body.appendChild(script);

        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", "./lib/mapbox-gl.css");

        document.head.appendChild(link);

        script.onload = resolve;
      });
    },
    init() {
      const center = [120.2, 30.2];
      const zoom = 14;

      window.map = new mapboxgl.Map({
        container: "mapbox",
        minZoom: 6,
        maxZoom: 18,
        zoom,
        center,
        renderWorldCopies: false,
        repaint: true,
        trackResize: true,
        attributionControl: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mapbox {
  width: 100%;
  height: 100%;
}
</style>