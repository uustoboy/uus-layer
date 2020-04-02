<template>
  <div id="app">
    <button @click="click">弹层</button>
    <UUSLayer
      @handleCancel="close"
      :popupSwitch="popupSwitch"
      @handleEnsure="ensure"
      @handlemMask="mask"
      :center="popCenter"
      :title="popTitle"
    ></UUSLayer>
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
  popCenter = {
    text: "弹层内容？"
  };
  popTitle = {
    show: true,
    text: "标题"
  };

  private click(): void {
    this.popupSwitch = true;
  }

  private close(): void {
    this.popupSwitch = false;
  }

  private ensure(): void {
    this.popupSwitch = false;
  }
  private mask(): void {
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
