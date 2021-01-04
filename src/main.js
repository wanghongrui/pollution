import { createApp } from 'vue'
import App from './App.vue'

import store from './store/index'

import "./assets/css/base.css";

var echarts = require('echarts');

// 创建app
const app = createApp(App);

// 配置全局属性
app.config.globalProperties.$echarts = echarts;

app.use(store)
  .mount('#app');
