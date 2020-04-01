import Vue from "vue";
import UUSLayer from "./layer/layer";

const Components = {
  UUSLayer
};

// Object.keys(Components).forEach(name => {
//     Vue.component(name, Components[name])
// });
UUSLayer.install = (Vue) => Vue.component(UUSLayer.name, UUSLayer); // 给组件配置install方法

export default UUSLayer;
