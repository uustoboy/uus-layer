import Vue from 'vue'
import HelloWorld from './HelloWorld.vue'

// const Components = {
//     HelloWorld
// }

// Object.keys(Components).forEach(name => {
//     Vue.component(name, Components[name])
// });
HelloWorld.install = Vue => Vue.component(HelloWorld.name, HelloWorld) // 给组件配置install方法 

export default HelloWorld