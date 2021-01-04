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
import loader from "load-script-promise";

/**
 * 1.土壤详查重点行业企业
 * 2.场地调查及修复地块
 * 3.重点监管排污企业
 * 4.危废经营和产生企业
 */

export default {
  components: {
    Mapbox,
    Styles,
  },
  computed: {
    data2() {
      return this.$store.state.data2;
    },
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 1000);
  },
  watch: {
    data2() {
      this.setData2();
    },
  },
  methods: {
    init() {
      loader.loadScript("./data/data2.js").then(() => {
        this.$store.commit("data2_changed", window.data2);
      });
    },
    setData2() {
      if (!this.data2) {
        return;
      }

      this.addLayer(this.data2);
    },
    addLayer(data) {
      const dataSource = map.getSource("data");

      if (dataSource) {
        dataSource.setData(data);
      } else {
        map.addSource("data", {
          type: "geojson",
          data,
        });
        map.addLayer({
          id: "data",
          type: "fill",
          source: "data",
          layout: {},
          paint: {
            "fill-color": "#088",
            "fill-opacity": 0.8,
          },
        });

        map.on("click", "data", (e) => {
          const id = e.features[0].properties.OBJECTID;
          data.features.forEach((f) => {
            if (f.properties.OBJECTID === id) {
              this.$store.commit("item_changed", f);
            }
          });
        });
      }
    },
  },
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