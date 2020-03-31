<template>
  <div
    v-show="popupSwitch"
    class="u-layerWrap"
    :class="layer.className"
    :style="layer.style"
    :id="layer.id"
  >
    <div
      v-if="maskLayer.show"
      class="u-layer-mask"
      :class="[maskLayer.className]"
      :style="[maskLayer.style]"
      @click="handlemMask"
    ></div>
    <div class="u-layer-main">
      <slot name="main">
        <div class="u-layer-info">
          <slot name="center">
            <div
              class="u-layer-title"
              :class="[title.className]"
              :style="[title.style]"
              v-if="title.text"
              v-html="title.text"
            ></div>
            <div
              class="u-layer-center"
              :class="[center.className]"
              :style="[center.style]"
              v-html="center.text"
            ></div>
          </slot>
        </div>
        <div class="u-layer-btnMain">
          <a
            v-if="ensureBtn.show"
            href="javascript:;"
            class="u-layer-btn"
            :class="[ensureBtn.className]"
            :style="[ensureBtn.style]"
            @click="handleEnsure"
          >{{ensureBtn.text}}</a>
          <a
            v-if="cancelBtn.show"
            href="javascript:;"
            class="u-layer-btn"
            :class="[cancelBtn.className]"
            :style="[cancelBtn.style]"
            @click="handleCancel"
          >{{cancelBtn.text}}</a>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
@Component
export default class UUSLayer extends Vue {
  //显示弹层;
  @Prop({
    type: Boolean,
    required: true,
    default: false
  })
  private popupSwitch!: boolean;
  //取消;
  @Prop({
    type: Object,
    default: () => {
      return {
        show: true,
        className: "u-layer-btnCur",
        style: {},
        text: "取消"
      };
    }
  })
  private cancelBtn!: Record<string, any>;
  //确定
  @Prop({
    type: Object,
    default: () => {
      return {
        show: true,
        className: "u-layer-btnCur",
        style: {},
        text: "确定"
      };
    }
  })
  private ensureBtn!: Record<string, any>;
  //遮罩
  @Prop({
    type: Object,
    default: () => {
      return {
        show: true,
        className: "",
        style: {}
      };
    }
  })
  private maskLayer!: Record<string, any>;
  //弹层
  @Prop({
    type: Object,
    default: () => {
      return {
        id: "",
        className: "",
        style: {}
      };
    }
  })
  private layer!: Record<string, any>;
  //标题
  @Prop({
    type: Object,
    default: () => {
      return {
        id: "",
        className: "",
        style: {},
        text: ""
      };
    }
  })
  private title!: Record<string, any>;
  //标题
  @Prop({
    type: Object,
    default: () => {
      return {
        className: "",
        style: {},
        text: ""
      };
    }
  })
  private center!: Record<string, any>;

  @Emit("handleCancel")
  handleCancel() {
    // console.log(n);
    // return 0;
  }

  @Emit("handleEnsure")
  handleEnsure() {
    // console.log(n);
    // return 0;
  }

  @Emit("handlemMask")
  handlemMask() {
    // console.log(n);
    // return 0;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import "./layer.scss";
</style>
