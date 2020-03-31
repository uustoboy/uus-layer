<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <button @click="click">弹层</button>
    <UUSLayer
      @handleCancel="close"
      :popupSwitch="popupSwitch"
      @handleEnsure="ensure"
      @handlemMask="mask"
      :center="popCenter"
      :title="popTitle"
    >
      <!-- <template slot="center">
        <h1>Here might be a page title</h1>
      </template>-->
    </UUSLayer>
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
    text: "确定领取水晶年费会员<Br/>160元优惠券吗？"
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
