<template>
  <div>
    <div class="u-layerWrap" v-show="popupSwitch">
      <div class="u-layer-mask"></div>
      <div class="u-layer-main">
        <div class="u-layer-info">
          <div class="u-layer-title">标题</div>
          <div></div>
        </div>
        <div class="u-layer-btnMain">
          <a href="javascript:;" class="u-layer-btn">确定</a>
          <a href="javascript:;" class="u-layer-btn" @click="handleCancel(popupSwitch)">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
@Component
export default class UUSLayer extends Vue {
  @Prop({
    type: Boolean,
    required: true,
    default: false
  })
  private popupSwitch!: boolean;

  @Emit()
  handleCancel(n: boolean): boolean {
    // console.log(n);
    return n;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   lang='scss'>
@import "./layer.scss";
</style>
