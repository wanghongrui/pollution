<template>
  <div class="info">
    <div class="info-item">
      <span class="info-label">调查单位</span>
      <span class="info-value">{{ item.properties.dcdw }}</span>
    </div>
    <div class="info-item">
      <span class="info-label">监测单位</span>
      <span class="info-value">{{ item.properties.jcdw }}</span>
    </div>
    <div class="info-item">
      <span class="info-label">评审时间</span>
      <span class="info-value">{{ item.properties.pssj }}</span>
    </div>
    <div class="info-item">
      <span class="info-label">敏感单位</span>
      <span class="info-value">{{ item.properties.ccqmgdw }}</span>
    </div>
    <div class="info-item">
      <span class="info-label">最终结论</span>
      <span class="info-value">{{ item.properties.zzjl }}</span>
    </div>
    <div class="info-item">
      <span class="info-label">是否详查</span>
      <span class="info-value">{{ item.properties.sfqdxc }}</span>
    </div>
    <div class="info-item">
      <span class="info-label">污染区域</span>
      <span class="info-value">{{ item.properties.zywrqy }}</span>
    </div>
    <div class="info-item">
      <span class="info-label">超标情况</span>
      <span class="info-value">{{ item.properties.cbwrqk }}</span>
    </div>
  </div>
</template>

<script>
/*
DCDW	调查单位
JCDW 监测单位
PSSJ	评审时间
CCQMGDW	拆除前敏感单位
ZZJL	最终结论
GHYT	规划用途
SFQDXC	是否启动详查
TZWRYZ	特征污染因子
ZYWRQY	主要污染区域
CBWRQK	超标污染情况`
*/
export default {
  props: ["item"],
  mounted() {
    console.log(this.item);
  },
};
</script>

<style lang="scss" scoped>
.info {
  color: white;

  &-item {
    margin: 6px 0;
    display: flex;
  }

  &-label {
    margin-right: 3px;
    color: #ddd;
    width: 72px;
  }

  &-value {
    flex: 1;
  }
}
</style>