<template>
  <transition name="u-dialog-fade">
    <div
      v-if="popupSwitch"
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
            >{{ ensureBtn.text }}</a>
            <a
              v-if="cancelBtn.show"
              href="javascript:;"
              class="u-layer-btn"
              :class="[cancelBtn.className]"
              :style="[cancelBtn.style]"
              @click="handleCancel"
            >{{ cancelBtn.text }}</a>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
// import Vue from "vue";
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import "./layer.scss";
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
  private cancelBtn!: object;
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
  private ensureBtn!: object;
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
  private maskLayer!: object;
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
  private layer!: object;
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
  private title!: object;
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
  private center!: object;

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
<style lang="scss">
// @import "./layer.scss";
@charset "UTF-8";
$global-unit: rem;
$designWidth: 375;

.u-layerWrap {
  @include fixed(
    (
      t: 0,
      l: 0,
      w: 100%,
      h: 100%,
      z: 100
    )
  );
  @include flex;
  @include ai(center);
  @include jc(center);
  @include tac;
  // @include hide();
}

.u-layer-mask {
  @include fixed(
    (
      t: 0,
      l: 0,
      w: 100%,
      h: 100%,
      z: 100
    )
  );
  @include bgc(rgba(0, 0, 0, 0.5));
}

.u-layer-main {
  @include rel();
  @include w(270);
  @include z(102);
  @include bgc(#fff);
  @include bdrs(8);
}

.u-layer-title {
  @include flcb(18, 18, #666);
  @include pad(20 0 0 0);
  @include tofl;
}

.u-layer-btnMain {
  @include flex;
  @include wh(100%, 44);
  @include bdt(1 solid #ccc);
}

.u-layer-btn {
  @include flc(18, 44, #666);
  @include fx(1);
  @include tac;
  @include tofl;

  &:nth-child(2) {
    @include bdl(1 solid #ccc);
  }
}

.u-layer-btnCur {
  @include c(#037aff);
}

.u-layer-center {
  @include pad(10 0);
  @include flex;
  @include ai(center);
  @include jc(center);
  @include tac;
  @include flc(14, 22, #666);
}

.u-dialog-fade-enter-active {
  @include css3(animation, dialog-fadein 0.4s);
  // .u-layer-mask {
  //   @include css3(animation, dialog-fadein 0.4s);
  // }
  .u-layer-main {
    @include css3(animation, dialog-zoom 0.4s);
  }
}

.u-dialog-fade-leave-active {
  @include css3(animation, dialog-fadein-leave 0.2s);
}

@include keyframes(dialog-fadein) {
  0% {
    @include opa(0);
  }
  100% {
    @include opa(1);
  }
}

@include keyframes(dialog-fadein-leave) {
  0% {
    @include opa(1);
  }
  100% {
    @include opa(0);
  }
}

@include keyframes(dialog-zoom) {
  0% {
    #{$browser}transform: scale(0);
  }
  50% {
    #{$browser}transform: scale(1.1);
  }
  100% {
    #{$browser}transform: scale(1);
  }
}
</style>
