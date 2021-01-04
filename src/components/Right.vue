<template>
  <div class="panel">
    <div class="panel-head">
      <div class="panel-title">{{ item.properties.name }}</div>
      <div class="panel-close" @click="close"></div>
    </div>

    <div class="info-container" v-if="item">
      <Info :item="item" />
    </div>

    <div class="progress-container">
      <Progress />
    </div>
  </div>
</template>

<script>
import Info from "@/components/common/Info";
import Progress from "@/components/common/Progress";

export default {
  components: {
    Info,
    Progress,
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
  methods: {
    close () {
      this.$store.commit('item_changed')
    }
  }
};
</script>

<style lang="scss" scoped>
.panel {
  position: relative;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;

   &-head {
    padding: 6px 0;
    border-bottom: 1px solid gray;
    display: flex;
  }

  &-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
  }

  &-close {
    width: 22px;
    height: 22px;
    background-image: url('../assets/img/close.png');
    background-size: contain;
    cursor: pointer;
  }

  .info-container {
    flex: 1;
    overflow: auto;
  }

  .progress-container {
    height: 220px;
  }
}
</style>