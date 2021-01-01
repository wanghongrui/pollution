<template>
  <div class="head">
    <div class="head-logo"></div>
    <div class="head-text">污染源大屏展示</div>
  </div>
</template>

<style lang="scss" scoped>
.head {
  display: flex;
  align-items: center;

  &-logo {
    width: 42px;
    height: 42px;
    background: url("../assets/logo.png");
    background-size: contain;
  }

  &-text {
    font-size: 2rem;
  }
}
</style>