<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <button @click="click">弹层</button>
    <UUSLayer @handleCancel="close" :popupSwitch="popupSwitch" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UUSLayer from "./components/layer/layer.vue";

@Component({
  components: {
    UUSLayer
  }
})
export default class App extends Vue {
  popupSwitch = false;

  private click(): void {
    this.popupSwitch = true;
  }

  private close(n: boolean): void {
    console.log(this.popupSwitch);
    this.popupSwitch = false;
  }
}
</script>

<style lang='scss'>
@charset "UTF-8";
$global-unit: rem;
$designWidth: 375;
@include min-base($label: true);
#app {
}
</style>
