<template>
  <div class="mapbox" id="mapbox"></div>
</template>

<script>
import border from "@/assets/region";
import mask from "@turf/mask";
import bbox from "@turf/bbox";

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

      const setting = () => {
        if (map.isStyleLoaded()) {
          this.setBorder();

          map.off("sourcedata", setting);
        }
      };

      map.on("sourcedata", setting);
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
    setBorder() {
      const masked = mask(border);

      map.addSource("border", {
        type: "geojson",
        data: masked,
      });
      map.addLayer({
        id: "border",
        type: "fill",
        source: "border",
        layout: {},
        paint: {
          "fill-color": "rgb(26, 47, 101)",
          "fill-opacity": 0.8,
        },
      });

      this.fitBounds(border);
    },
    fitBounds(feature) {
      const bounds = bbox(feature);
      map.fitBounds(bounds, {
        padding: 120,
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