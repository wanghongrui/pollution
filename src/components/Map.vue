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
import Mapbox from "@/components/map/Mapbox";
import Styles from "@/components/map/Styles";
import loader from "load-script-promise";
import bbox from "@turf/bbox";

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
    item() {
      return this.$store.state.item;
    },
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 2000);
  },
  watch: {
    data2() {
      this.setData2();
    },
    item() {
      if (this.item) {
        console.log(this.item);
        this.fitBounds(this.item);
      }
    },
  },
  methods: {
    init() {
      loader.loadScript("./data/data2.js").then(() => {
        const data = window.data2.features.map((d, i) => {
          const origin = d.properties;

          /**
            DCDW	调查单位
            JCDW监测单位
            PSSJ	评审时间
            CCQMGDW	拆除前敏感单位
            ZZJL	最终结论
            GHYT	规划用途
            SFQDXC	是否启动详查
            TZWRYZ	特征污染因子
            ZYWRQY	主要污染区域
            CBWRQK	超标污染情况
           */

          d.properties = {
            id: i,
            name: origin.DKMC,
            region: origin.SZXZQ,
            address: origin.DZ,
            area: origin.MJ,

            dcdw: origin.DCDW,
            jcdw: origin.JCDW,
            pssj: origin.PSSJ,
            ccqmgdw: origin.CCQMGDW,
            zzjl: origin.ZZJL,
            ghyt: origin.GHYT,
            sfqdxc: origin.SFQDXC,
            tzwryz: origin.TZWRYZ,
            zywrqy: origin.ZYWRQY,
            cbwrqk: origin.CBWRQK,
          };
          return d;
        });

        this.$store.commit("data2_changed", data);
      });
    },
    setData2() {
      if (!this.data2) {
        return;
      }

      this.addLayer(this.data2);
    },
    addLayer(features) {
      const dataSource = map.getSource("data");

      const data = {
        type: "FeatureCollection",
        features,
      };

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
          const id = e.features[0].properties.id;
          data.features.forEach((f) => {
            if (f.properties.id === id) {
              this.$store.commit("item_changed", f);
            }
          });
        });
      }
    },
    fitBounds(feature) {
      const bounds = bbox(feature);
      map.fitBounds(bounds, {
        padding: 200,
      });
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