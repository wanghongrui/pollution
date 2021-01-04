<template>
  <div class="info">
    <div class="info-head">
      <div class="info-title" :title="item.properties.name">{{item.properties.name}}</div>
      <div class="info-close"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  mounted () {
    console.log(this.item);
  }
}
</script>

<style lang="scss" scoped>
.info {
  color: white;
  padding: 20px;

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
  }

  &-close {
    width: 22px;
    height: 22px;
    background-image: url('../../assets/img/close.png');
    background-size: contain;
  }
}
</style>