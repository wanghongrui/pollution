import { createApp } from 'vue'
import App from './App.vue'

import store from './store/index'

var echarts = require('echarts');

// 创建app
const app=createApp(App);
app.use(store)
  .mount('#app');


// 配置全局属性
app.config.globalProperties.$echarts = echarts;
