<template>
  <div class="u-layerWrap">
		<div class="u-layer-mask"></div>
		<div class="u-layer-main">
			<div class="u-layer-info">
				<div class="u-layer-title">标题</div>
				<div>

				</div>
			</div>
			<div class="u-layer-btnMain">
				<a href="javascript:;" class="u-layer-btn">
					确定
				</a>
				<a href="javascript:;" class="u-layer-btn">
					取消
				</a>
			</div>
		</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class UUSLayer extends Vue {
   @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   lang='scss'>
@import './layer.scss';
</style>
